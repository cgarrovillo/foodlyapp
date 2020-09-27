const jwt = require('jsonwebtoken')
const secret = require('../config').JWT

const AccountModel = require('../models/AccountModel')

const auth = (req, res, next) => {
  const token = req.header('X-Auth-Token')

  //Check for token
  if (!token) {
    res.status(401).send({ msg: 'Unauthorized: No token' })
  }

  try {
    //Verify token
    const decoded = jwt.verify(token, secret)
    const id = decoded.id

    //Check if Account actually exists on the database
    AccountModel.findById(id)
      .then((account) => {
        if (!account)
          return res.status(400).send({
            msg:
              "Trying to perform an action with an Account that doesn't exist.",
          })

        //Add account from payload to the request body. Account is derived using id from the JWT payload (as the payload includes the Account ID)
        req.body.authorizedAccount = decoded
        next()
      })
      .catch((err) => {
        throw err
      })
  } catch (err) {
    throw err
  }
}

module.exports = auth
