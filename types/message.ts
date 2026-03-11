export interface MessageCardData {
  date: string
  number: string
  text: Array<{ me?: string; other?: string }>
}

export interface Bubble {
  sender: "me" | "other"
  text: string
}

export interface User {
  name: string
  picture: string
}