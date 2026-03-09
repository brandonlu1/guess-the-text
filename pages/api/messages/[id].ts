// src/pages/api/messages/[id].ts
import type { NextApiRequest, NextApiResponse } from "next"
import messages from "../../../data/messages.json" // only server can read

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const index = parseInt(id as string)

  if (isNaN(index) || index < 0 || index >= messages.length) {
    return res.status(400).json({ error: "Invalid message index" })
  }

  // Only send the requested message
  res.status(200).json(messages[index])
}