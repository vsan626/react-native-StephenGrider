import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation } from 'react-navigation'; //! skipps having to send props down from parent component

const ResultsList = ({ title, results, navigation }) => {
  if(!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return (
            //! TouchableOpacity allows for certain location of screen to be pressed. Navigation.navigate brings us to component specified on App.js. Second parameter is information we can pass to the component
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
              <ResultsDetail result={item}/>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});
export default withNavigation(ResultsList);
