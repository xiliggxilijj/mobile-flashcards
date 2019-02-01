import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { sharedStyles } from '../utils/styles'
import QuizCard from './QuizCard'
import QuizScore from './QuizScore'

class QuizView extends Component {

  static navigationOptions = {
    title: 'Quiz'
  }
  state = {
    questionIdx: 0,
    correct: 0,
    incorrect: 0,
    showAnswer: false,
    viewResult: false
  }

  componentDidMount() {   
    clearLocalNotification().then(setLocalNotification)
  }

  handleToggleButton = () => {
    this.setState((state) => ({
      showAnswer: !state.showAnswer
    }))
  }

  handleAnswer = (result) => {
    this.setState((state) => ({
      questionIdx : state.questionIdx + 1,
      correct : result === 'correct' ? state.correct + 1 : state.correct,
      incorrect : result === 'incorrect' ? state.incorrect + 1 : state.incorrect,
      showAnswer: false
    }))
  }

  reset = () => {
    this.setState(() => ({
      questionIdx : 0,
      correct : 0,
      incorrect : 0,
      showAnswer: false,
      viewResult: false
    }))
  }

  render() {
    const { deckId, deck } = this.props;
    const { questionIdx, showAnswer, correct, incorrect } = this.state;
    const showCard = questionIdx < deck.questions.length ? true : false;

    return(
      <View style={sharedStyles.body}>
        <Text style={sharedStyles.quizCount}>{ showCard ? questionIdx + 1 : questionIdx }/{ deck.questions.length }</Text>
        {showCard ?
            <QuizCard
              deck={deck}
              questionIdx={questionIdx}
              showAnswer={showAnswer}
              togglebutton={this.handleToggleButton}
              mark={this.handleAnswer}
            />
          :
            <QuizScore
              deckId={deckId}
              deck={deck}
              correct={correct}
              incorrect={incorrect}
              reset={this.reset}
            />
        }
      </View>
    )
  }
}


function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params
  return {
    deckId,
    deck: state[deckId]
  }
}

export default connect(mapStateToProps)(QuizView)
