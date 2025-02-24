import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'

interface SubscribeToEventParams {
  name: string
  email: string
}

export async function subscribeToEvent({
  name,
  email
}: SubscribeToEventParams) {
  const results = await db
    .insert(subscriptions)
    .values({
      name,
      email
    })
    .returning()

  const subscriber = results[0]

  return {
    subscriberId: subscriber.id
  }
}
