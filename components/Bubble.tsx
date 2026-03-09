import type { Bubble as BubbleType } from "../types/message"

export default function Bubble({ sender, text }: BubbleType) {
  return <div className={`bubble ${sender}`}>{text}</div>
}