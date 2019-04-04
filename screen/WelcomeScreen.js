import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <Swiper>
            <View style={styles.slide1}>
              <Text style={styles.text}>This is the first view.</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>This is the second view.</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>This is the third view.</Text>
            </View>
        </Swiper>
      </View>
    )
  }
}

const styles = {
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'normal',
    margin: 20,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004d40',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01579b',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4d40',
  }
}
