import dotenv from 'dotenv'
import { Dialect } from 'sequelize/types'

dotenv.config()

interface AppEnv {
  readonly DB_DIALECT: Dialect
  readonly DB_HOST: string
  readonly DB_PORT: string
  readonly DB_NAME: string
  readonly DB_USER: string
  readonly DB_PASSWORD: string
  readonly OUTPUT_DIR: string
}

export class Environment {
  static readonly APP_ENV: AppEnv = {
    DB_DIALECT: process.env.DB_DIALECT! as Dialect,
    DB_HOST: process.env.DB_HOST!,
    DB_PORT: process.env.DB_PORT!,
    DB_NAME: process.env.DB_NAME!,
    DB_USER: process.env.DB_USER!,
    DB_PASSWORD: process.env.DB_PASSWORD!,
    OUTPUT_DIR: process.env.OUTPUT_DIR!,
  }

  private static throwEnvErrMsg = (msg: string): never => {
    throw new Error(`${msg} must be defined`)
  }

  static checkEnvVariables = (): void | never => {
    for (let key in this.APP_ENV) {
      if (!this.APP_ENV[key as keyof AppEnv]) {
        this.throwEnvErrMsg(key)
      }
    }
  }
}
