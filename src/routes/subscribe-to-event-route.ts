import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

// body - search params(filtro paginaçã0), route params (identiifcar recursos c id)

export const subscribeToEventRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscriptions',
    {
      schema: {
        summary: 'Subscribes someone to the event',
        tags: ['subscription'],
        description: 'Subscribes someone to the event ...',
        body: z.object({
          name: z.string(),
          email: z.string().email()
        }),
        response: {
          201: z.object({
            name: z.string(),
            email: z.string().email()
          })
        }
      }
    },
    async (request, reply) => {
      const { name, email } = request.body

      // criação da inscrição no bd
      return reply.status(201).send({
        name,
        email
      })
    }
  )
}
