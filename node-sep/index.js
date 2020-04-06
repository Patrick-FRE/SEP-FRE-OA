const fs = require('fs')
const EventEmitter = require('events')
const { StringDecoder } = require('string_decoder')
const sd = new StringDecoder('utf8')

class LoggerClass extends EventEmitter {
   execute(asyncFunc, ...args) {
      console.time('execute')
      this.emit('begin')
      asyncFunc(...args, (err, data) => {
         if (err) {
            return this.emit('error', err)
         }
         this.emit('data', data)
         console.timeEnd('execute')
         this.emit('end')
      })
   }
}

const logger = new LoggerClass()
logger.on('begin', () => console.log('Begin Event Triggered'))
logger.on('end', () => console.log('End Event Triggered'))
logger.on('data', data => console.log(sd.write(data)))
//logger.on('error', err => console.error('error happened'))
process.on('uncaughtException', err => {
   console.log(err)
   process.exit(1)
})
logger.execute(fs.readFile, 'xy.txt')

// function main() {
//       setTimeout(() => {
//          console.log('1')
//       }, 0)
//       setImmediate(() => {
//          console.log('2')
//       })
// }

// main()
