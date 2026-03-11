import { NextResponse } from "next/server"
import { shuffledDeck } from "@/lib/shuffledDeck"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // App Router dynamic route params
) {
  const resolvedParams = await params
  const id = resolvedParams.id
  const index = Number(id)

  if (isNaN(index) || index < 0 || index >= shuffledDeck.length) {
    return NextResponse.json({ done: true, text: [] })
  }

  return NextResponse.json(shuffledDeck[index])
}