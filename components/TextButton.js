import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import {sharedStyles} from '../utils/styles'

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[sharedStyles.textButton, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

