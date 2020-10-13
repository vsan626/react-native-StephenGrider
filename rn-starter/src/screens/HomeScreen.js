import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Touchable } from 'react-native';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Danny's HomeScreen</Text>
      <Button 
        title='Go to Components Demo'
        onPress={() => props.navigation.navigate('Components')}
      />
      <Button 
        title="Go to List Demo"
        onPress={() => props.navigation.navigate('List')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
