import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      {/* <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text> */}
      <View style={styles.boxOne}/>
      <View style={styles.boxTwo}/>
      <View style={styles.boxThree}/>
    </View>
  )
}

const styles = StyleSheet.create({
  boxOne: {
    width: 100,
    height: 100,
    backgroundColor: 'rgb(50, 122, 30)'
  },
  boxTwo: {
    width: 100,
    height: 100,
    backgroundColor: 'rgb(122, 50, 30)',
    top: 100
  },
  boxThree: {
    width: 100,
    height: 100,
    backgroundColor: 'rgb(50, 30, 122)'
  },
  viewStyle: {
    // borderWidth: 3,
    // borderColor: 'black',
    // height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    fontSize: 18,
    ...StyleSheet.absoluteFillObject
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
  }
})

export default BoxScreen