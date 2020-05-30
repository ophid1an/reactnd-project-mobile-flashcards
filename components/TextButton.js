import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const TextButton = ({ children, onPress, style = {}, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: 'purple',
    fontSize: 18,
  }
})

export default TextButton