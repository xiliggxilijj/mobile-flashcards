import React, { Component } from 'react'
import { KeyboardAvoidingView, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { saveDeck,generateUID } from '../utils/api'
import { addDeck } from '../actions'
import { sharedStyles} from '../utils/styles'



class NewDeckView extends Component {
  state = {
    title: ''
  }

  
  onSubmit = () => {
    const {title} = this.state;

    if(!title.trim()) {
      alert('Invalid title')
      return
    }

    const deckId = generateUID()
    const newDeck = {
      title: title.trim(),
      questions: []
    }

    this.props.dispatch(addDeck(deckId, newDeck))

    this.setState(() => ({title: ''}))

    this.props.navigation.navigate('Deck', {deckId: deckId, deckName: title});
    saveDeck(deckId, newDeck)
  }

  render() {
   
    const submitDisabled=!this.state.title||!this.state.title.length>0;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={sharedStyles.question}>What is the title of the new deck?</Text>
        <TextInput
          value={this.state.title}
          style={sharedStyles.input}
          onChangeText={(title) => this.setState({title})}
        />
        <TouchableOpacity
          style={submitDisabled?sharedStyles.submitBtnDisabled:sharedStyles.submitBtn}
          disabled={submitDisabled}
          onPress={this.onSubmit}>
          <Text style={sharedStyles.submitBtnText}>Create Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
})

export default connect()(NewDeckView)
