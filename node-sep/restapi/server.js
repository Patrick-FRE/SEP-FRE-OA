const express = require('express')
const bookRouter = require('./books/bookroutes')

const app = express()
const port = 3000

app.use('/books', bookRouter())
app.get('/', (req, res) => {
   res.send('Our Nodemon REST API works')
})

app.listen(port, () => {
   console.log(`app running on port ${port}`)
})
