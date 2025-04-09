import fastify from 'fastify'
import crypto from 'node:crypto'
import { db } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await db('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transacao de teste',
      amount: 1000,
    })
    .returning('*')
  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server running!!!')
  })
