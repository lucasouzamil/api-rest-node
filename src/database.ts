import 'dotenv/config'
import Knex from 'knex'

if (!process.env.DATABASE_URL) {
  throw new Error('Database not found')
}

export const config = {
  client: 'sqlite3',
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const db = Knex(config)
