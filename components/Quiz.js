import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'

import TextButton from './TextButton'
import { opal, lavender, cadet, mint } from '../utils/colors'

const Quiz = ({ navigation, deck }) => {
  const [index, setIndex] = useState(0)
  const [isQuestion, setIsQuestion] = useState(true)
  const [correct, setCorrect] = useState(0)
  const [finished, setFinished] = useState(false)

  const cards = deck.questions
  const card = cards[index]
  const cardsCnt = cards.length

  const toggleCard = () => setIsQuestion(!isQuestion)
  
  const chooseCorrect = flag => {
    setIsQuestion(true)

    if (flag) {
      setCorrect(correct + 1)
    }

    if (index < cardsCnt - 1) {
      setIndex(index + 1)
    } else {
      setFinished(true)
    }
  }

  const restartQuiz = () => {
    setIsQuestion(true)
    setCorrect(0)
    setIndex(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: 25}}>{`Your score: ${Math.round(correct * 100 / cardsCnt)}%`}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={[styles.btnContainer, styles.restartQuizBtnContainer]}>
            <TextButton onPress={restartQuiz} style={{color: 'black'}}>
                Restart Quiz
            </TextButton>
          </View>
          <View style={[styles.btnContainer, styles.backToDeckBtnContainer]}>
            <TextButton onPress={navigation.goBack} style={{color: 'white'}}>
                Back to Deck
            </TextButton>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>{`${index + 1}/${cardsCnt}`}</Text>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.card}>
            {isQuestion ? card.question : card.answer}
          </Text>
        </View>
      </View>
      
      <View style={{flex: 3, alignItems: 'center'}}>
        <View style={[styles.btnContainer, {marginBottom: 40}]}>
          <TextButton onPress={toggleCard}>
              {isQuestion ? 'Show Answer' : 'Show Question'}
          </TextButton>
        </View>
        <View>
          <View style={[styles.btnContainer, styles.correctBtnContainer]}>
            <TextButton onPress={() => chooseCorrect(true)} style={{color: 'black'}}>
                Correct
            </TextButton>
          </View>
          <View style={[styles.btnContainer, styles.incorrectBtnContainer]}>
            <TextButton onPress={() => chooseCorrect(false)} style={{color: 'white'}}>
                Incorrect
            </TextButton>
          </View>
        </View>
      </View>
      
    </View>
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
  counterContainer: {
    padding: 10,
  },
  counter: {
    textAlign: 'center',
    fontSize: 17,
  },
  cardContainer: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: cadet,
    borderRadius: 5,
  },
  card: {
    fontSize: 20,
  },
  btnContainer: {
    padding: 10,
    marginBottom: 20,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  correctBtnContainer: {
    backgroundColor: mint
  },
  incorrectBtnContainer: {
    backgroundColor: lavender
  },
  restartQuizBtnContainer: {
    backgroundColor: mint
  },
  backToDeckBtnContainer: {
    backgroundColor: lavender
  },
})

const mapStateToProps = (decks, { route }) => {
  const { title } = route.params

  return {
    deck: decks[title],
  }
}

export default connect(mapStateToProps)(Quiz)
