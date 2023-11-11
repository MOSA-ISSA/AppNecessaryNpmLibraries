import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const VectorIcons = ({name}) => {
  return (
      <Icon name={name} size={30} color="#900" />
  )
}

export default VectorIcons

const styles = StyleSheet.create({})