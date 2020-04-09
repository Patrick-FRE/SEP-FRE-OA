const express = require('express')
const getBookDetailsById = require('../services/bookService')
const bookRouter = express.Router()

function router(Book) {
   bookRouter
      .route('/')
      .get((req, res) => {
         const query = {}
         if (req.query.author) {
            query.author = req.query.author
         }
         async function mongo() {
            await Book.find(query, (err, books) => {
               if (err) {
                  res.status(400).json(err)
               }
               console.log(books)
               res.json(books)
            })
         }
         mongo()
      })
      .post((req, res) => {
         console.log('req.body', req.body)
         const book = new Book(req.body)
         book.save()
         return res.status(201).json(book)
      })
   bookRouter
      .route('/:id')
      .all((req, res, next) => {
         Book.findById(req.params.id, (err, book) => {
            if (err) {
               return res.status(404).json(err)
            }
            if (book) {
               req.book = book
               return next()
            }
            res.status(404)
            return next()
         })
      })
      .get((req, res) => {
         if (req.book) {
            res.status(200).json(req.book)
         } else {
            res.status(404)
         }
      })
      .put((req, res) => {
         const { book } = req
         book.title = req.body.title
         book.author = req.body.author
         book.save()
         return res.json(book)
      })
      .patch((req, res) => {
         const { book } = req
         Object.entries(req.body).forEach((item) => {
            const key = item[0]
            const value = item[1]
            book[key] = value
         })
         book.save((err) => {
            if (err) {
               return res.send(err)
            }
            return res.json(book)
         })
      })
      .delete((req, res) => {
         const { book } = req
         book.remove((err) => {
            if (err) res.send(err)
            return res.sendStatus(204)
         })
      })

   bookRouter.route('addBook').post((req, res) => {})
   bookRouter.route('/details/:id').get((req, res) => {
      const { id } = req.params
      let response = {}(async function mongo() {
         response = await bookService.getBookDetailsById(id)
         if (response.status === 401) {
            res.send('unauthenticated!')
         }
      })
   })
   return bookRouter
}

module.exports = router
