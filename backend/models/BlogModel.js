const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Blog = mongoose.model('Blog', BlogSchema)
