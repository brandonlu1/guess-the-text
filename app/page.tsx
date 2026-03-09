"use client"

import { useState, useEffect } from "react"
import MessageCard from "../components/MessageCard"
import "./globals.css"

export default function App() {
  const [index, setIndex] = useState(0)
  const [message, setMessage] = useState<any>(null) // fetched message
  const [flipped, setFlipped] = useState(false)

  // Fetch message whenever index changes
  useEffect(() => {
    setFlipped(false) // reset flip state on next card
    const fetchMessage = async () => {
      const res = await fetch(`/api/messages/${index}`)
      const data = await res.json()
      setMessage(data)
    }
    fetchMessage()
  }, [index])

  const nextCard = () => setIndex((prev) => prev + 1)

  if (!message) return <div>Loading...</div>

  return (
    <main className="container">
      <h1>Guess the Text</h1>

      <MessageCard
        key={message.number + index} // ensures fresh mount
        message={message}
        flipped={flipped}
        onToggle={() => setFlipped((prev) => !prev)}
      />

      <button className="next-button" onClick={nextCard}>
        Next
      </button>
    </main>
  )
}