import messages from "@/data/messages.json"
import { shuffle } from "@/utils/shuffle"

// shuffle once when the server starts
export const shuffledDeck = shuffle(messages)