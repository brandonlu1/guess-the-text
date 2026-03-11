// app/api/messages/[id]/route.ts
import { shuffledDeck } from "../route"

export async function GET(
  req: Request,
  context: { params: { id: string } | Promise<{ id: string }> } // params can be a Promise
) {
  // Unwrap params if it's a Promise
  const params = await context.params
  const index = Number(params.id)

  if (isNaN(index) || index < 0 || index >= shuffledDeck.length) {
    return new Response(JSON.stringify({ error: "Invalid index" }), { status: 400 })
  }

  return new Response(JSON.stringify(shuffledDeck[index]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}