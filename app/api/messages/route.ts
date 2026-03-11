import messages from "@/data/messages.json"
import { shuffle } from "@/utils/shuffle"

// shuffle once on server start
export const shuffledDeck = shuffle(messages)

export async function GET() {
  return new Response(JSON.stringify(shuffledDeck), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}