import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { sharedStyles } from '../utils/styles'

class QuizScore extends Component {

  render() {
    const {deckId, deck, correct, incorrect, reset, navigation } = this.props
    return (
      <View style={sharedStyles.body}>
        <Text style={sharedStyles.score}>Correct: {correct}</Text>
        <Text style={sharedStyles.score}>Incorrect: {incorrect}</Text>
        <Text style={sharedStyles.score}>{Math.round((correct/deck.questions.length)*100)}%</Text>

        <TouchableOpacity
          style={sharedStyles.button}
          onPress={reset}
        >
          <Text style={sharedStyles.buttonText}>Restart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={sharedStyles.button}
          onPress={() => navigation.navigate('DeckView', {deckId: deckId, deckName: deck.title})}
        >
          <Text style={sharedStyles.buttonText}>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(QuizScore)
