import { StyleSheet } from 'react-native'
export const purple = '#292477'
export const gray = '#757575'
export const white = '#fff'
export const red = '#b71845'
export const orange = '#f26f28'
export const blue = '#4e4cb8'
export const lightPurp = '#7c53c3'
export const pink = '#b93fb3'
export const black = '#000000'

export const sharedStyles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    center:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      marginBottom: 10,
      fontSize: 30,
      color: black
    },
    label: {
      fontSize: 18,
      alignSelf: 'flex-start',
      color: black
    },
    quizCount: {
      alignSelf: 'flex-start',
      marginTop: 10,
      marginLeft: 10,
      color: black,
      fontSize: 18
    },

    input: {
      width: 250,
      height: 44,
      padding: 8,
      borderWidth: 1,
      borderColor: black,
      marginBottom: 15
    },
    question: {
      fontSize: 28,
      marginLeft: 20,
      marginRight: 20,
      color: black
    },
    qCount: {
      marginTop: 10,
      fontSize: 25,
      color: gray
    },
    score: {
      fontSize: 25,
      color: purple,
      marginBottom: 5
    },
    textButton: {
      textAlign: 'center',
      color: blue
    },
    
    submitBtn: {
      backgroundColor: purple,
      padding: 10,      
      //borderRadius: 10,
      height: 45,
      width: 180,
      marginLeft: 40,
      marginRight: 40,
      marginBottom: 100
    },
    submitBtnDisabled: {
      backgroundColor: gray,
      padding: 10,      
      //borderRadius: 10,
      height: 45,
      width: 180,
      marginLeft: 40,
      marginRight: 40,
      marginBottom: 100
    },
    submitBtnText: {
      color: white,
      fontSize: 18,
      textAlign: 'center'
    },
    button: {
      width: 180,
      height: 45,
      backgroundColor: purple,
      //borderRadius: 16,
      borderColor: purple,
      borderWidth: 1,
      padding: 15,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 12,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      fontSize: 18,
      color: white,
    }



  })