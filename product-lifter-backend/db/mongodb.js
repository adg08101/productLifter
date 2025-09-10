const mongoose = require('mongoose')

async function connectDb ({ dbHost, dbPort, dbName }) {
  const uri = `mongodb://${dbHost}:${dbPort}/${dbName}`
  await mongoose.connect(uri, { useNewUrlParser: true })
}

mongoose.connection.on('open', () => { console.log('DB connection successfully established') })

module.exports = connectDb
