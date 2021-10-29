const mongoose = require('mongoose')
require('dotenv').config()

mongoose.Promise = Promise

const isDisconnected = 0

mongoose.connection.on('connected', () => {
  console.log('Connection Established')
})

mongoose.connection.on('reconnected', () => {
  console.log('Connection Reestablished')
})

mongoose.connection.on('disconnected', () => {
  console.log('Connection Disconnected')
})

mongoose.connection.on('close', () => {
  console.log('Connection Closed')
})
mongoose.connection.on('error', (error) => {
  console.log('ERROR: ' + error)
})

console.log('------------------------------------')
console.log(`${process.env.DATABASE_URL}`)
console.log('------------------------------------')

if (mongoose.connection.readyState === isDisconnected) {
  mongoose.connect(`${process.env.DATABASE_URL}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
}

module.exports = mongoose
