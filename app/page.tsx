"use client"

import { useState, useEffect } from "react"
import MessageCard from "../components/MessageCard"
import "./globals.css"

export default function App() {
  const [index, setIndex] = useState<number>(0)
  const [message, setMessage] = useState<any>(null)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    setFlipped(false)
    const fetchMessage = async () => {
      const res = await fetch(`/api/messages/${index}`)
      const data = await res.json()
      setMessage(data)
    }
    fetchMessage()
  }, [index])

  const nextCard = () => setIndex(prev => prev + 1)

  if (!message) return <div>Loading...</div>

  return (
    <main className="container">
      <h1>Guess the Text</h1>

      {message.done ? (
        <div className="finished-card">
          <h2>All messages viewed!</h2>
        </div>
      ) : (
        <MessageCard
          key={index + JSON.stringify(message.text)}
          message={message}
          flipped={flipped}
          onToggle={() => setFlipped(prev => !prev)}
        />
      )}

      <button className="next-button" disabled={message.done} onClick={nextCard}>
        Next
      </button>
    </main>
  )
}