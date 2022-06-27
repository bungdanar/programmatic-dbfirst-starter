const SequelizeAuto = require('sequelize-auto')
const { APP_ENV } = require('./environment')

const database = (tables) => {
  return new SequelizeAuto(
    APP_ENV.DB_NAME,
    APP_ENV.DB_USER,
    APP_ENV.DB_PASSWORD,
    {
      host: APP_ENV.DB_HOST,
      dialect: APP_ENV.DB_DIALECT,
      port: parseInt(APP_ENV.DB_PORT),
      directory: APP_ENV.OUTPUT_DIR,
      caseFile: 'o',
      caseModel: 'p',
      caseProp: 'o',
      views: true,
      lang: 'ts',
      additional: {
        timestamps: true,
      },
      tables: tables,
      noInitModels: true,
    }
  )
}

module.exports = {
  database,
}
