const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

// MongoDB
const db = require('./config/keys').mongoURI
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected')
  })
  .catch((err) => console.log(err))

// Routes
const blogRoute = require('./routes/api/blog')
app.use('/api/blogs', blogRoute)

// Start Server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on ${port}`))
