const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

// Account Model
const AccountModel = require('../../models/AccountModel')
const secret = require('../../config').JWT
const auth = require('../../middlewares/auth')

/** Signs a JWT using an account object returned from the resolve object of a Mongoose callback function
 *  and sends it to the API request sender.
 */
const signJwtAndSend = (account, res) => {
  jwt.sign(
    //Payload
    {
      id: account.id,
    },

    //Secret
    secret,

    //Token Options
    { expiresIn: 3600 },

    //Callback
    (err, token) => {
      if (err) throw err

      res.send({
        token,
        user: {
          id: account.id,
          email: account.email,
          name: account.name,
        },
      })
    }
  )
}

// @route   POST api/accounts
// @desc    Create an Account
// @access  Public
router.post('/', (req, res) => {
  const { email, password, name } = req.body

  //Simple validation
  if (!email || !password || !name) {
    return res.status(400).send({
      msg: 'Missing fields',
    })
  }

  //Check for existing account
  AccountModel.findOne({ email: email }).then((account) => {
    if (account) return res.status(400).send({ msg: 'Account already exists' })

    const newAccount = new AccountModel({
      email,
      password,
      name,
    })

    // Salt and hash
    bcrypt.genSalt(5, (err, salt) => {
      if (err) throw err
      bcrypt.hash(newAccount.password, salt, (err, hash) => {
        if (err) throw err

        newAccount.password = hash
        newAccount.save().then((account) => {
          signJwtAndSend(account, res)
        })
      })
    })
  })
})

// @route   POST api/accounts/auth
// @desc   Authenticate User
// @access  Public
router.post('/auth', (req, res) => {
  const { email, password } = req.body

  //Simple validation
  if (!email || !password) {
    return res.status(400).send({
      msg: 'Missing fields',
    })
  }

  //Check for nonexistant account
  AccountModel.findOne({ email: email }).then((account) => {
    if (!account) return res.status(400).send({ msg: 'Invalid credentials' })

    // Validate password
    bcrypt.compare(password, account.password).then((match) => {
      if (!match) return res.status(400).send({ msg: 'Invalid credentials' })

      signJwtAndSend(account, res)
    })
  })
})

// @route   GET api/accounts
// @desc    Get user based on Account.id
// @access  Private
router.get('/', auth, (req, res) => {
  AccountModel.findById(req.body.authorizedAccount.id) //authorizedAccount.id coming from the returned object of the auth middleware
    .then((account) => {
      if (!account) {
        return res.status(400).send({
          msg: 'Account could not be found using the provided token.',
        })
      }
      res.send(account)
    })
    .catch((err) => {
      throw err
    })
})

/** @route   DELETE api/account/
 *  @desc    Delete an Account
 *  @access  Private
 */
router.delete('/', auth, (req, res) => {
  AccountModel.findByIdAndDelete(req.body.authorizedAccount.id)
    .then(() => res.send({ success: true }))
    .catch((err) => {
      res.status(400).send('Could not delete')
    })
})

module.exports = router
