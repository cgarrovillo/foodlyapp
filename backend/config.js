// Separated and consolidated object containing environment variables
const config = {
  DB: process.env.MONGO,
  JWT: process.env.JWT,
}

module.exports = config
