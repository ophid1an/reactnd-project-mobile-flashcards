import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import DeckDetails from './DeckDetails'
import TextButton from './TextButton'
import { deleteDeck } from '../utils/api'
import { removeDeck } from '../actions'
import { opal, lavender, cadet } from '../utils/colors'

const Deck = ({ dispatch, navigation, deck }) => {
  const handleAddCard = title => card => {
    // TODO
  }

  const handleStartQuiz = () => {
    // TODO
    console.log('Starting quick with deck.title ', deck.title)
  }

  const handleDeleteDeck = () => {
    const { title } = deck

    deleteDeck(title)
    dispatch(removeDeck(title))
    navigation.goBack()
  }

  if (!deck) {
    return <View style={styles.container} />
  }

  return (
    <View style={styles.container}>
      <View>
        <DeckDetails 
          title={deck.title} 
          cardsCnt={deck.questions.length}
        />
      </View>
      <View>
        <View style={[styles.btnContainer, styles.addCardBtnContainer]}>
          <TextButton style={[styles.btn, {color: 'black'}]}
            onPress={handleAddCard(deck.title)}
          >
            Add Card
          </TextButton>
        </View>
        <View style={[styles.btnContainer, styles.startQuizBtnContainer]}>
          <TextButton style={[styles.btn, {color: 'white'}]}
            onPress={handleStartQuiz}
          >
            Start Quiz
          </TextButton>
        </View>
        <View style={styles.btnContainer}>
          <TextButton style={styles.btn}
            onPress={handleDeleteDeck}
          >
            Delete Deck
          </TextButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: opal,
  },
  btnContainer: {
    padding: 10,
    marginBottom: 20,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  addCardBtnContainer: {
    backgroundColor: cadet
  },
  startQuizBtnContainer: {
    backgroundColor: lavender
  },
  btn: {
    fontSize: 18,
  },
})

const mapStateToProps = (decks, { route }) => {
  const { title } = route.params

  return {
    deck: decks[title],
  }
}

export default connect(mapStateToProps)(Deck)
