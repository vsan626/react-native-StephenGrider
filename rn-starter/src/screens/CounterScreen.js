import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  //TODO: state of count 
  //TODO: action === { type: 'increment' || 'decrement', payload: }
  switch (action.type) {
    case 'increment_count':
      return {...state, count: state.count + action.payload}
    case 'decrement_count':
      return {...state, count: state.count + action.payload}
    default:
      return state
  }
}

const CounterScreen = () => {
  //TODO: fix this
  let [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({type: 'increment_count', payload: 1})
        }}
      />
      <Button
        title="Increase"
        onPress={() => {
          dispatch({type: 'increment_count', payload: -1})
        }}
      />
      <Text>Current Counter: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
