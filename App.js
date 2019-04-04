import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WelcomeScreen from './screen/WelcomeScreen'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WelcomeScreen />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
