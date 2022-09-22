import React from 'react'
import {StyleSheet, Text, View } from 'react-native'

export default function Title() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Rayven</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    padding: 15,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize : 22
  },
})
