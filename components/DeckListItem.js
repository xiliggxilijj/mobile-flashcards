import React, { Component } from 'react'
import {  View, Text } from 'react-native'
import {sharedStyles } from '../utils/styles'

class  DeckListItem extends Component{

  
  //handleDelete=(key)=>{
  //  console.log("delete===============:"+key);
  //}
  render(){
    //console.log(this.props);
    //const { id, title, cardCount, navigation } = this.props
    const { id, deck } = this.props;
    const title=deck.title;
    const qCount=deck.questions.length;
    return (
       <View style={sharedStyles.center}>
        <Text style={sharedStyles.title}>{title}</Text>
        <Text style={sharedStyles.qCount}>{qCount} {qCount === 1 ? `card` : `cards`}</Text>                      
       </View>
    )
  }
  
}



export default DeckListItem;
