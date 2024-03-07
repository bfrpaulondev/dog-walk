// IntroScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import {introScreenStyles} from './IntroScreenStyles.js'

const IntroScreen = () => {
  return (
    <View style={introScreenStyles.container}>
      <Text style={introScreenStyles.title}>Intro Screen</Text>
    </View>
  );
};

export default IntroScreen;
