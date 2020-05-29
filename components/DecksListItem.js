import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import DeckDetails from './DeckDetails'
import { cadet } from '../utils/colors'

const DecksListItem = ({ deck }) => {
  const onPress = (title) => {
    console.log('Pressed! Title: ', title)
  }

  const cardsCnt = deck.questions.length

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => onPress(deck.title)}
    >
      <DeckDetails title={deck.title} cardsCnt={cardsCnt} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: cadet,
    marginBottom: 15,
    maxWidth: 200,
  },
})

export default DecksListItem
