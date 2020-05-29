import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DeckDetails = ({ title, cardsCnt }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.cards}>
        {`${cardsCnt} ${cardsCnt === 1 ? 'card' : 'cards'}`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginBottom: 5,
    textAlign: 'center',
  },
  cards: {
    textAlign: 'center',
    fontSize: 18,
  }
})

export default DeckDetails
