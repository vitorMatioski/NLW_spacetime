import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/server', async (req, res) => {
  const users = await prisma.user.findMany()

  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server listening on port http://localhost:3333')
  })
