import { AsyncStorage } from 'react-native'
import { init, DECKS_KEY } from './_data'

export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
export function fetchDecks () {
    return AsyncStorage.getItem(DECKS_KEY)
    .then(init)
}

export function saveDeck(key, deck) {
  return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
    [key]: deck
  }))
}
export function removeDeckFromStore(key) {
  try{
      AsyncStorage.getItem(DECKS_KEY).then((result)=>{
        let decks = JSON.parse(result);
        //console.log("decks:"+JSON.stringify(decks));
        delete decks[key];
        //console.log("decks 2:"+JSON.stringify(decks));
        AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
      });           
  }
  catch(error){
      console.log(error)
  }
  return key;
}

export function saveCard(key, question, answer) {
  AsyncStorage.getItem(DECKS_KEY).then((result) => {
    let decks = JSON.parse(result)
    decks[key].questions.push({question: question, answer: answer})
    AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(decks))
  })
}

