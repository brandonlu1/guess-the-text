"use client"

interface Props {
  sender: "me" | "other"
  text: string
}

export default function Bubble({ sender, text }: Props) {
  const className = sender === "me" ? "bubble me" : "bubble other"
  return <div className={className}>{text}</div>
}