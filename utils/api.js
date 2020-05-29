import { AsyncStorage } from 'react-native';
import sampleDecks from './_decks'

export const DECKS_STORAGE_KEY = 'mobile-flashcards:decks'

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => {
      if (null === results) {
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(sampleDecks))

        return sampleDecks
      }
      
      return JSON.parse(results)
    })
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(JSON.parse)
    .then(results => results[id])
}

export function saveDeckTitle(title) {
  return getDeck(title)
    .then(deck => {
      if (!deck) {
        return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
          [title]: {
            title,
            questions: [],
          },
        }))
      }
    })
}

export function addCardToDeck(title, card) {
  return getDeck(title)
    .then(deck => {
      AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deck.title]: {
          questions: [...deck.question, card],
        },
      }))
    })
}

export function removeDeck(id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => {
      const data = JSON.parse(results);
      data[id] = undefined;
      delete data[id];
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}

export function removeDecks() {
  return AsyncStorage.removeItem(DECKS_STORAGE_KEY);
}