const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const jwtStrategy = require('passport-jwt').Strategy
const user = require('../users/User')
const { ExtractJwt } = require('passport-jwt')

function auth() {
   passport.use(
      'signup',
      new LocalStrategy(
         {
            usernameField: 'username',
            passwordField: 'password',
         },
         async (username, password, done) => {
            try {
               const user = await user.create({ username, password })
               return done(null, user)
            } catch (err) {
               return done(err)
            }
         }
      )
   )
   passport.use(
      'login',
      new LocalStrategy(
         {
            usernameField: 'username',
            passwordField: 'password',
         },
         async (username, password, done) => {
            try {
               const user = await user.findOne({ username })
               if (!user) {
                  return done(null, false, { message: 'User Not Found' })
               }
               const validate = await user.isValidPassword(password)
               if (!validate) {
                  return done(null, false, { message: 'Wrong Password' })
               }
               return done(null, user, { message: 'Logged in Successfully' })
            } catch (error) {
               return done(error)
            }
         }
      )
   )
   passport.use(
      new jwtStrategy(
         {
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
         },
         async (token, done) => {
            try {
               done(null, token)
            } catch (err) {
               done(err)
            }
         }
      )
   )
}
