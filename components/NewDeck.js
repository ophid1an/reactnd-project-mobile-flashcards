import React, { useState } from 'react'
import { 
  KeyboardAvoidingView, 
  View, 
  Text, 
  StyleSheet, TextInput, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import TextButton from './TextButton'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'
import { opal, lavender, mint } from '../utils/colors'

const { width } = Dimensions.get('window'); 

const NewDeck = ({ dispatch, navigation}) => {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  const submit = () => {
    saveDeckTitle(title)
      .then(() => {
        dispatch(addDeck(title))
        setTitle('')
        setError('')
        navigation.navigate('Deck', {title})
      })
      .catch(e => setError(e.message))
  }

  const isDisabled = () => '' === title

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.title}>
          What is the title of your new deck?
        </Text>
      </View>

      <View style={{flex: 2, alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          onChangeText={setTitle}
          value={title}
          placeholder='Deck Title'
        />
        {error !== '' && <Text style={styles.error}>{error}</Text>}
        <View style={[styles.btnContainer, {opacity: isDisabled() ? 0.5 : 1}]}>
          <TextButton style={styles.btn}
            onPress={submit}
            disabled={isDisabled()}
          >
            Submit
          </TextButton>
        </View>
      </View>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 5,
    alignItems: 'center',
    backgroundColor: opal,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  input: {
    padding: 10,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: mint,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    width: width * 0.6,
    fontSize: 18,
  },
  btnContainer: {
    padding: 10,
    marginBottom: 20,
    paddingHorizontal: 30,
    backgroundColor: lavender,
    borderRadius: 5,
  },
  btn: {
    color: 'white',
  },
  error: {
    color: 'red',
    marginBottom: 2,
    fontSize: 16,
  }
})


export default connect()(NewDeck)
