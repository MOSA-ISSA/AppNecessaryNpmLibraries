import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationExample from './src/Navigation'
import VectorIcons from './src/VectorIcons'
import TabNavigation from './src/TabNavigation'
import DrawerNavigation from './src/DrawerNavigation'
// import TabNavigation from './src/TabNavigation'


const App = () => {
  return (
    <View style={{flex:1}}>
      <VectorIcons name={'rocket'}/>
      <NavigationExample/>
      <TabNavigation/>
      <DrawerNavigation/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})