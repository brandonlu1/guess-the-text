// just creates a shuffled deck once
import messages from "@/data/messages.json"
import { shuffle } from "@/utils/shuffle"

// shuffle once on server start
export const shuffledDeck = shuffle(messages)