const express = require('express')

const bookRouter = express.Router()

function router() {
   bookRouter.route('/').get((req, res) => {
      const book = { id: 1, title: 'Book Title', author: 'Patrick' }
      res.json(book)
   })
   bookRouter.route('/:id').get((req, res) => {
      const { id } = req.params
      const book = { title: 'Book Title', author: 'patrick', id }
      res.json(book)
   })

   return bookRouter
}

module.exports = router
