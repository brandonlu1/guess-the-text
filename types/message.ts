export interface MessageEntry {
  me?: string
  other?: string
}

export interface MessageCardData {
  date: string
  number: string
  text: MessageEntry[]
}

export interface Bubble {
  sender: "me" | "other"
  text: string
}