import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Touchable } from 'react-native';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>Danny's HomeScreen</Text>
      <Button 
        title='Go to Components Demo'
        onPress={() => navigation.navigate('Components')}
      />
      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title="Image Screen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button 
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button 
        title="Go to Color Screen"
        onPress={() => navigation.navigate('ColorScreen')}
      />
      <Button 
        title="Go to Square Screen"
        onPress={() => navigation.navigate('SquareScreen')}
      />
      <Button 
        title="Go to Text Demo"
        onPress={() => navigation.navigate('TextScreen')}
      />
      <Button 
        title="Go to Box Screen Demo"
        onPress={() => navigation.navigate('BoxScreen')}
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
