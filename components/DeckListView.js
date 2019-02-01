import React, { Component } from 'react'
import {Text, Alert,TouchableOpacity,StyleSheet, FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import { removeDeck,receiveDecks } from '../actions'
import { fetchDecks,removeDeckFromStore } from '../utils/api'
import DeckListItem from './DeckListItem'
import { AppLoading } from 'expo'
import TextButton from './TextButton'

import { gray,purple, blue,white } from '../utils/styles'

class DeckListView extends Component {
  state = {
    ready: false
  }

  componentDidMount() {
    const { dispatch } = this.props;
    fetchDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ready: true})))
  }
  handleDelete=(key)=>{
    
    let confirm=Alert.alert(
        'Delete Deck',
        'Are you sure you want to delete this deck?',
        [
          {text: 'YES', onPress: () => this.delete(key)},
          {text: 'NO'},          
        ]
      );
      //console.log("Confirm confirm:"+confirm);
    }
  delete=(key)=>{
    //console.log("delete===============:"+key);
    this.props.dispatch(removeDeck(key))
    removeDeckFromStore(key);
   //.then(()=>this.setState(() => ({ready: false})));

  }

  render() {
    const { decks } = this.props;
    const { ready } = this.state;
    //console.log(Object.keys(decks));
    if (ready === false) {
      return <AppLoading />
    }
    if (!decks||Object.keys(decks).length==0) {
      return <View style={{ flex: 1, alignSelf: 'stretch' }}><Text  style={styles.noDataText}>No deck available, Please add deck first!</Text></View>
    }
    return (
      <View style={{ flex: 1, alignSelf: 'stretch' }}>          
        <FlatList
          data={Object.keys(decks).map(id => {  return { key: id } })}
          renderItem={({item}) => (<TouchableOpacity style={styles.item}  onPress={() => this.props.navigation.navigate('DeckView',{deckId: item.key, deckName: this.props.decks[item.key].title})}>
                                      <View  key={item.key} >
                                        <DeckListItem key={item.key} id={item.key} deck={this.props.decks[item.key]} />
                                        <TextButton
                                          onPress={()=>this.handleDelete(item.key)}
                                          style={{marginTop: 10, marginBottom: 10, fontSize: 16}}
                                        >Delete</TextButton>
                                      </View>
                                   </TouchableOpacity>)}
          ItemSeparatorComponent= {()=><View style={styles.separator}/>}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  row:{
   flex: 1, 
   flexDirection: 'row',
   justifyContent: 'space-between',
  },
  item: {
    backgroundColor: white,
    //borderRadius: Platform.OS === 'ios' ? 16 : 2,
    //borderColor: purple,
    //borderWidth: 1,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding: 10,
    backgroundColor: blue,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 20,
  },
  noDataText: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: purple,
  },
  title: {
    fontSize: 30,
    color: purple
  },
  qCount: {
    marginTop: 5,
    fontSize: 12,
    color: gray
  },
})
function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckListView)
