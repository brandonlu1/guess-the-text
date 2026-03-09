"use client"

import Bubble from "./Bubble"
import type { MessageCardData } from "../types/message"
import { phoneMap } from "../lib/phoneMap"

interface Props {
  message: MessageCardData
  flipped: boolean
  onToggle: () => void
}

export default function MessageCard({ message, flipped, onToggle }: Props) {
  const user = phoneMap[message.number]

  return (
    <div className="card" onClick={onToggle}>
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="card-front">
          {message.text.map((entry, i) => {
            const [sender, text] = Object.entries(entry)[0] as ["me" | "other", string]
            return <Bubble key={i} sender={sender} text={text} />
          })}
        </div>

        {/* Back */}
        <div className="card-back">
          {user ? (
            <>
              <img src={user.picture} alt={user.name} className="user-picture" />
              <h2>{user.name}</h2>
            </>
          ) : (
            <p>{message.number}</p>
          )}
          sent on
          <p>{message.date}</p>
        </div>
      </div>
    </div>
  )
}