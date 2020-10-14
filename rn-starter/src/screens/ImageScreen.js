import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetails';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" score={"10"} imageSource={require('../../assets/beach.jpg')}/>
      <ImageDetail title="Beach" score={"20"} imageSource={require('../../assets/forest.jpg')}/>
      <ImageDetail title="Mountain" score={"301"} imageSource={require('../../assets/mountain.jpg')}/>
    </View>
  )
};

export default ImageScreen;
