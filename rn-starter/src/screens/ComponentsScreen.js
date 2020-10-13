import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const Danny = <Text style={styles.secondTextStyle}>2020</Text>
  return (
    <View>
      <Text style={styles.textStyle}>Lakers are champions</Text>
      {Danny}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  secondTextStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
