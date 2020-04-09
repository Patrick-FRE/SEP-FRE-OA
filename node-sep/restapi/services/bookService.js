const axios = require('axios')
const xml2js = require('xml2js')
const parser = xml2js.Parser({explicitArray: false})

function bookService() {
    
    function getBookDetailsById(id) {
        return new Promise((resolve,reject) => {
            axios.get(`https://www.goodreads.com/book/show/${id}.json?key=${process.env.GOODREADS_API}`)
            .then(response => {
                
            })
        }
    }
}