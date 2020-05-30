import React, { useState } from 'react'
import { 
  View, 
  TextInput, 
  KeyboardAvoidingView, Dimensions, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import TextButton from './TextButton'
import { lavender, mint, opal } from '../utils/colors'
import { saveCardToDeck } from '../utils/api'
import { addCardToDeck } from '../actions'

const { width } = Dimensions.get('window'); 

const NewQuestion = ({ dispatch, navigation, route}) => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const isDisabled = () => '' === answer || '' === question

  const submit = () => {
    const { title } = route.params
    const card = { question, answer }

    saveCardToDeck(title, card)
    dispatch(addCardToDeck(title, card))
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setQuestion}
          value={question}
          placeholder='Question'
        />
        <TextInput
          style={styles.input}
          onChangeText={setAnswer}
          value={answer}
          placeholder='Answer'
        />
      </View>
      <View style={{flex: 1}}>
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
  inputsContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 30, 
    marginBottom: 40
  },
  input: {
    padding: 10,
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
    paddingHorizontal: 30,
    backgroundColor: lavender,
    borderRadius: 5,
  },
  btn: {
    color: 'white',
  },
})

export default connect()(NewQuestion)
