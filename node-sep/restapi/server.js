const express = require('express')
const bookRouter = require('./books/bookroutes')
const authorRouter = require('./authors/authors')
const mongoose = require('mongoose')
const Book = require('./books/book')
const Author = require('./authors/authorSchema')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const bookService = require('./api/services/bookService')
dotenv.config()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const MONGO_URL = process.env.MONGO_URL
const port = process.env.PORT || 3000

// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function () {
//    // we're connected!
//    console.log('were connected!')
// })
app.use('/books', bookRouter(Book, BookService))
app.use('/authors', authorRouter(Author))
app.get('/', (req, res) => {
   res.send('Our Nodemon REST API works')
})

app.listen(port, () => {
   mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
      if (err) console.log(err)
   })
   console.log(`app running on port ${port}`)
})
