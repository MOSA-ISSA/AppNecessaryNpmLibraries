import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationExample from './src/Navigation'
import VectorIcons from './src/VectorIcons'
import TabNavigation from './src/TabNavigation'
// import TabNavigation from './src/TabNavigation'


const App = () => {
  return (
    <View style={{flex:1}}>
      <VectorIcons name={'rocket'}/>
      {/* <NavigationExample/> */}
      <TabNavigation/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})