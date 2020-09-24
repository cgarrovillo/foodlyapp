const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// MongoDB
const db = require('./config/keys').mongoURI
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch((err) => console.log(err))

// Routes
const blogRoute = require('./routes/api/blog')
app.use('/api/blogs', blogRoute)

// Start Server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on ${port}`))
