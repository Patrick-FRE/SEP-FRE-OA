const express = require('express')
const passport = require('passport')

const authRouter = express.Router()

function router() {
   authRouter.route('/signup').post(
      passport.authenticate('signup', { session: false }, async (req, res) => {
         res.status(201).json({ message: 'Signup Successful', user: req.user })
      })
   )
   authRouter.route('/login').post()
}

module.exports = router
