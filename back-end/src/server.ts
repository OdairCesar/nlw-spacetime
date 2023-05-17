import fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = fastify()

app.register(cors, {
  origin: true,
})

const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server runnig on http://localhost:3333')
  })
