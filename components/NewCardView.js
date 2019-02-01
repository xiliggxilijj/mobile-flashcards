import React, { Component } from 'react'
import { KeyboardAvoidingView, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { saveCard } from '../utils/api'
import { sharedStyles} from '../utils/styles'

class NewCardView extends Component {
  
  static navigationOptions = {
    title: 'Add Card'
  }
  
  state = {
    question: '',
    answer: '',   
  }

 

  onSubmit = () => {
    const { deckId } = this.props
    const { question, answer } = this.state

    if(!question.trim() || !answer.trim()) {
      alert('Invalid input!')
      return
    }

    this.props.dispatch(addCard(deckId, question, answer))

    this.setState(() => ({question: '', answer: ''}))

    saveCard(deckId, question, answer)
  }

  render() {
    const { question, answer } = this.state
    const submitDisabled=!this.state.question||!this.state.answer||!this.state.question.length>0||!this.state.answer.length>0;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={sharedStyles.label}>Question</Text>
        <TextInput
          value={question}
          style={sharedStyles.input}
          onChangeText={(question) => this.setState({question})}
          autoFocus={true}
        />
        <Text style={sharedStyles.label}>Answer</Text>
        <TextInput
          value={answer}
          style={sharedStyles.input}
          onChangeText={(answer) => this.setState({answer})}
        />
        
        <TouchableOpacity
          disabled={submitDisabled}
          style={submitDisabled?sharedStyles.submitBtnDisabled:sharedStyles.submitBtn}
          onPress={this.onSubmit}>
          <Text style={sharedStyles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40
  },
 
})

function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params

  return {
    deckId
  }
}

export default connect(mapStateToProps)(NewCardView)
