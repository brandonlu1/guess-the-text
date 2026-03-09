// pages/api/messages/[id].ts
import type { NextApiRequest, NextApiResponse } from "next"
import messages from "../../../data/messages.json"
import { shuffle } from "../../../utils/shuffle"

// Shuffle once on server startup
const shuffledMessages = shuffle(messages)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const index = parseInt(id as string, 10) || 0

  // Return the message at the requested index in the shuffled deck
  const message = shuffledMessages[index % shuffledMessages.length]
  res.status(200).json(message)
}