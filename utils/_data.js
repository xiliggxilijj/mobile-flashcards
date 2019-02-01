import { AsyncStorage } from 'react-native'

export const DECKS_KEY = 'DECKS_KEY'

let decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

function setData() {
  AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
  return decks
}

export function init(results) {
  return results === null
    ? setData()
    : JSON.parse(results)
}
