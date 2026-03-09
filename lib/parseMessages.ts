// src/lib/parseMessages.ts
import type { Bubble } from "../types/message"

export function parseMessages(text: string): Bubble[] {
  const bubbles: Bubble[] = []

  // Matches all the sender tags in order
  const senderMatches = text.match(/#ME#\:|#OTHER#\:/g) || []

  // Split the text into parts between sender tags
  const parts = text.split(/#ME#\:|#OTHER#\:/).filter(p => p.trim() !== "")

  for (let i = 0; i < parts.length; i++) {
    // Determine the sender
    const sender = senderMatches[i] === "#ME#:" ? "me" : "other"

    // Split multiple bubbles from the same sender by $
    const subTexts = parts[i].split("$").filter(s => s.trim() !== "")
    subTexts.forEach(t => {
      bubbles.push({ sender, text: t.trim() })
    })
  }

  return bubbles
}