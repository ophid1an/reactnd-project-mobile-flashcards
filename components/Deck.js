import React from 'react'
import { View, StyleSheet } from 'react-native'
import DeckDetails from './DeckDetails'
import TextButton from './TextButton'

const Deck = ({ deck }) => {
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
          <TextButton style={[styles.btn, {color: 'black'}]}>
            Add Card
          </TextButton>
        </View>
        <View style={[styles.btnContainer, styles.startQuizBtnContainer]}>
          <TextButton style={[styles.btn, {color: 'white'}]}>
            Start Quiz
          </TextButton>
        </View>
        <View style={styles.btnContainer}>
          <TextButton style={styles.btn}>
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
  },
  btnContainer: {
    padding: 10,
    marginBottom: 20,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  addCardBtnContainer: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white'
  },
  startQuizBtnContainer: {
    backgroundColor: 'black'
  },
  btn: {
    fontSize: 18,
  },
})

export default Deck
