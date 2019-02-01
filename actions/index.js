export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD = 'ADD_CARD'


export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck(deckId, deck) {
  return {
    type: ADD_DECK,
    deckId,
    deck
  }
}
export function removeDeck(deckId) {
  return {
    type: REMOVE_DECK,
    deckId
  }
}
export function addCard(deckId, question, answer) {
  return {
    type: ADD_CARD,
    deckId,
    question,
    answer
  }
}
