const express = require('express')
const router = express.Router()

// Auth middleware
const auth = require('../../middlewares/auth')

// Blog Model
const BlogModel = require('../../models/BlogModel')

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
  const newBlog = new BlogModel({
    name: req.body.name,
    bio: req.body.bio,
    author: req.account.id,
  })

  //TODO: Check if req.account.id exists on the database for ++robustness

  newBlog.save().then((blog) => res.send(blog))
})

// @route   DELETE api/blogs/:id
// @desc    Delete a Blog
// @access  Private
router.delete('/:id', auth, (req, res) => {
  BlogModel.findById(req.params.id)
    .then((blog) => blog.remove().then(() => res.send({ success: true })))
    .catch((err) => res.status(404).send({ success: false }))
})

module.exports = router
