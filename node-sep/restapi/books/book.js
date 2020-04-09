const mongoose = require('mongoose')
const { Schema } = mongoose

const BookSchema = new Schema({
   title: { type: String, required: true },
   author: { type: String, required: true },
   read: { type: Boolean, default: false },
})

module.exports = mongoose.model('Book', BookSchema)
