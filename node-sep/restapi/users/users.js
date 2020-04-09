const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { Schema } = mongoose

const UserSchema = new Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
   },
   password: {
      type: String,
      required: true,
      trime: true,
   },
})

UserSchema.pre('save', (next) => {
   const user = this
   if (user.isModified || user.isNew) {
      return next()
   } else {
      bycrypt.hash(user.password, process.env.SALTING_ROUNDS, (err, hashPassword) => {
         if (err) console.log('error hashing password')
         else {
            user.password = hashPassword
         }
         return next()
      })
   }
})

UserSchema.methods.isValidPassword() = async (password) => {}
