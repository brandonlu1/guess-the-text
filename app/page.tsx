"use client"

import { useState, useEffect } from "react"
import MessageCard from "../components/MessageCard"
import "./globals.css"

export default function App() {
  const [index, setIndex] = useState<number>(0)
  const [message, setMessage] = useState<any>(null)
  const [flipped, setFlipped] = useState(false)

  // Fetch message whenever index changes
  useEffect(() => {
    setFlipped(false) // reset flip state on next card

    const fetchMessage = async () => {
      try {
        const res = await fetch(`/api/messages/${index}`)
        if (!res.ok) {
          console.error("API returned error:", res.status)
          setMessage({ done: true, text: [] })
          return
        }

        const data = await res.json()
        setMessage(data)
      } catch (err) {
        console.error("Fetch failed", err)
        setMessage({ done: true, text: [] })
      }
    }

    fetchMessage()
  }, [index])

  const nextCard = () => setIndex((prev) => prev + 1)

  if (!message) return <div>Loading...</div>

  // deck finished
  if (message.done) {
    return (
      <main className="container">
        <h1>All messages viewed!</h1>
      </main>
    )
  }

  return (
    <main className="container">
      <h1>Guess the Text</h1>

      <MessageCard
        key={index + "-" + JSON.stringify(message.text)} 
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