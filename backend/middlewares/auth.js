const jwt = require('jsonwebtoken')
const secret = require('../config').JWT

const auth = (req, res, next) => {
  const token = req.header('X-Auth-Token')

  //Check for token
  if (!token) {
    res.status(401).send({ msg: 'Unauthorized: No token' })
  }

  try {
    //Verify token
    const decoded = jwt.verify(token, secret)
    //Add account from payload. Account is derived using id from the JWT payload (as the payload includes the Account ID)
    req.account = decoded
    next()
  } catch (e) {
    res.status(400).send({ msg: 'Token is not valid. ' })
  }
}

module.exports = auth
