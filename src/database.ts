import Knex from 'knex'

export const config = {
  client: 'sqlite3',
  connection: {
    filename: './tmp/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const db = Knex(config)
