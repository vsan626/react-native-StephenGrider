import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'friend #1', age: 43 },
    { name: 'friend #2', age: 33 },
    { name: 'friend #3', age: 12 },
    { name: 'friend #4', age: 21 },
    { name: 'friend #5', age: 42 },
    { name: 'friend #6', age: 45 },
    { name: 'friend #7', age: 67 },
    { name: 'friend #8', age: 51 },
    { name: 'friend #9', age: 27 }
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        //element === {item: {name: 'Friend #1'}}
        return (
          <Text style={styles.friendsStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  friendsStyle: { 
    // marginVertical: 6,
    borderColor: 'black',
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 30,
    width: '80%'
  }
});

export default ListScreen;
