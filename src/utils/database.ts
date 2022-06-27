import SequelizeAuto from 'sequelize-auto'
import { Environment } from './environment'

export class Database {
  static auto = (tables: string[]) => {
    return new SequelizeAuto(
      Environment.APP_ENV.DB_NAME,
      Environment.APP_ENV.DB_USER,
      Environment.APP_ENV.DB_PASSWORD,
      {
        host: Environment.APP_ENV.DB_HOST,
        dialect: Environment.APP_ENV.DB_DIALECT,
        port: parseInt(Environment.APP_ENV.DB_PORT),
        directory: Environment.APP_ENV.OUTPUT_DIR,
        caseFile: 'k',
        caseModel: 'p',
        caseProp: 'o',
        views: true,
        lang: 'ts',
        additional: {
          timestamps: true,
        },
        tables: tables,
        noInitModels: true,
        useDefine: false,
        singularize: true,
      }
    )
  }
}
