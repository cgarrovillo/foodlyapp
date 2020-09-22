require('dotenv').config()
module.exports = {
  mongoURI: `mongodb+srv://cgdev:${process.env.MONGO_PW}@cluster0.kxknh.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
}
