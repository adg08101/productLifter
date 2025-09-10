require('dotenv').config()

const config = {
  appConfig: {
    appHost: process.env.APP_HOST,
    appPort: process.env.APP_PORT
  },
  dbConfig: {
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST
  }
}

module.exports = config
