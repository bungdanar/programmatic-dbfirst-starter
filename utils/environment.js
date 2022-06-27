const dotenv = require('dotenv')

dotenv.config()

const APP_ENV = {
  DB_DIALECT: process.env.DB_DIALECT,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  OUTPUT_DIR: process.env.OUTPUT_DIR,
}

const throwEnvErrMsg = (msg) => {
  throw new Error(`${msg} must be defined`)
}

const checkEnvVariables = () => {
  for (let key in APP_ENV) {
    if (!APP_ENV[key]) {
      throwEnvErrMsg(key)
    }
  }
}

module.exports = {
  APP_ENV,
  checkEnvVariables,
}
