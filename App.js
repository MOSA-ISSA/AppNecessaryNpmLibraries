import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationExample from './src/Navigation'
import VectorIcons from './src/VectorIcons'


const App = () => {
  return (
    <View style={{flex:1}}>
      <VectorIcons/>
      <NavigationExample/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})