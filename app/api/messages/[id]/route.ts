import { NextResponse } from "next/server"
import { shuffledDeck } from "@/lib/shuffledDeck"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = Number(await params.id) // unwrap if needed

  if (isNaN(index) || index < 0 || index >= shuffledDeck.length) {
    return NextResponse.json({ done: true, text: [] })
  }

  return NextResponse.json(shuffledDeck[index])
}