const express = require('express')
const router = express.Router()

// Auth middleware
const auth = require('../../middlewares/auth')

// Blog Model
const BlogModel = require('../../models/BlogModel')
const AccountModel = require('../../models/AccountModel')

// @route   GET api/blogs
// @desc    Get all Blogs
// @access  Public
router.get('/', (req, res) => {
  BlogModel.find()
    .sort({ name: 1 })
    .then((blogs) => res.send(blogs))
})

// @route   POST api/blogs
// @desc    Create A Blog
// @access  Private
router.post('/', auth, (req, res) => {
  const { name, authorId } = req.body

  BlogModel.findOne({ name: name })
    .then((blog) => {
      if (blog) return res.status(400).send({ msg: 'That Blog Name is taken.' })

      const newBlog = new BlogModel({
        name: req.body.name,
        authorId: req.body.authorizedAccount.id,
      })
      newBlog.save().then((createdBlog) => res.send(createdBlog))
    })
    .catch((err) => {
      throw err
    })
})

// @route   DELETE api/blogs/:id
// @desc    Delete a Blog
// @access  Private
router.delete('/:id', auth, (req, res) => {
  BlogModel.findById(req.params.id)
    .then((blog) => {
      //If the blog's ObjectId does not match the authorizedAccount's ObjectId (decoded from the auth middleware), do not proceed
      if (!blog.authorId.equals(req.body.authorizedAccount._id))
        return res.status(404).send({ msg: 'Unauthorized.' })

      blog
        .remove()
        .then(() => res.send({ success: true }))
        .catch((err) => {
          throw err
        })
    })
    .catch((err) => res.status(404).send({ msg: 'Could not delete.' }))
})

module.exports = router
