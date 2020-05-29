import {
  RECEIVE_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD_TO_DECK,
} from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_DECKS:
    return { ...state, ...action.decks }
  case ADD_DECK:
    return { ...state, ...action.deck }
  case REMOVE_DECK:
    const { [action.title]: value, ...rest } = state;
    return rest
  case ADD_CARD_TO_DECK:
    return { 
      ...state, 
      [action.title] : {
        ...state[action.title],
        questions: [
          ...state[action.title].questions,
          action.card
        ]
      }
    }
  default:
    return state
  }
}
