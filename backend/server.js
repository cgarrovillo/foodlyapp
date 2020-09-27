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
const DB = require('./config').DB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch((err) => console.log(err))

// Routes
app.use('/api/blogs', require('./routes/api/blog'))
app.use('/api/accounts', require('./routes/api/account'))

// Start Server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on ${port}`))
