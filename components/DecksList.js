import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import DecksListItem from './DecksListItem'
import decks from '../utils/_decks'
import { opal } from '../utils/colors'

const DecksList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(decks).map(key => decks[key])}
        renderItem={({ item }) => <DecksListItem deck={item} />}
        keyExtractor={item => item.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: opal,
  },
})


export default DecksList
