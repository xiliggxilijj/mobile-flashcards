import React, { Component } from 'react'
import { Text, TouchableOpacity,  Animated } from 'react-native'
import { connect } from 'react-redux'
import {sharedStyles} from '../utils/styles'

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckName } = navigation.state.params
    return {
      title: deckName
    }
  }

  componentDidMount() {
    Animated.timing(new Animated.Value(0), {toValue: 1, duration: 500}).start()
  }

  render() {
    const { deckId } = this.props
    const { title, questions } = this.props.deck
  
    return (
      <Animated.View style={sharedStyles.body}>
        <Text style={sharedStyles.title}>{title}</Text>
        <Text style={sharedStyles.qCount}>{questions.length} {questions.length === 1 ? `card` : `cards`}</Text>
        <TouchableOpacity
          style={[sharedStyles.button, {marginTop: 50}]}
          onPress={() => this.props.navigation.navigate('NewCardView', {deckId: deckId})}
        >
          <Text style={sharedStyles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={sharedStyles.button}
          onPress={() => (questions.length === 0 ? alert('Please Add card First!') : this.props.navigation.navigate('QuizView', {deckId: deckId}))}
        >
          <Text style={sharedStyles.buttonText}>Quiz</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params

  return {
    deckId,
    deck: state[deckId],
  }
}


function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params

  return {
    deckId,
    deck: state[deckId],
  }
}

export default connect(mapStateToProps)(DeckView)
