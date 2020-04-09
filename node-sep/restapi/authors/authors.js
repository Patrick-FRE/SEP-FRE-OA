const express = require('express')

const authorRouter = express.Router()

function router(Author) {
   authorRouter
      .route('/')
      .get((req, res) => {
         async function mongo() {
            await Author.find({}, (err, authors) => {
               if (err) {
                  return res.status(400).json(err)
               }
               console.log('authors:', authors)
               return res.status(200).json(authors)
            })
         }
         mongo()
      })

      .post((req, res) => {
         console.log('req.body', req.body)
         const author = new Author(req.body)
         author.save((err, author) => {
            if (err) console.log('err')
            res.status(201).json(author)
         })
      })
   return authorRouter
}

module.exports = router
