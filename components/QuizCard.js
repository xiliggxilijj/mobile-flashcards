import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import TextButton from './TextButton'
import { sharedStyles} from '../utils/styles'

class QuizCard extends Component {

  render() {
    const { deck, questionIdx, showAnswer, togglebutton, mark } = this.props
    const card = deck.questions[questionIdx]
    return (
      <View style={sharedStyles.body}>
        <Text style={sharedStyles.question}>{showAnswer ? card.answer : card.question}</Text>
        <TextButton
          onPress={togglebutton}
          style={{marginTop: 20, marginBottom: 50, fontSize: 18}}
        >{showAnswer ? 'Question' : 'Answer'}</TextButton>

        <TouchableOpacity
          style={sharedStyles.button}
          onPress={() => mark('correct')}
        >
          <Text style={sharedStyles.buttonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={sharedStyles.button}
          onPress={() => mark('incorrect')}
        >
          <Text style={sharedStyles.buttonText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


export default QuizCard
