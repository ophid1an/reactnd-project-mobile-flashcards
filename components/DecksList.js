import React, { useEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import DecksListItem from './DecksListItem'
import { opal } from '../utils/colors'

const DecksList = ({ dispatch, decks }) => {
  useEffect(() => {
    getDecks()
      .then(decks => dispatch(receiveDecks(decks)))
  }, [])

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

const mapStateToProps = (decks) => ({
  decks
})

export default connect(mapStateToProps)(DecksList)
