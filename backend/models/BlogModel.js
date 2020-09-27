const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  authorId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Blog = mongoose.model('Blog', BlogSchema)
