/**
 * IntroScreen.js
 * 
 * Este arquivo representa a tela de introdução do aplicativo.
 * Ele renderiza uma imagem, um título e um texto explicativo.
 * 
 * @returns {JSX.Element} Uma view com a estrutura da tela de introdução.
 */

import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { introScreenStyles } from './IntroScreenStyles.js'
import { useNavigation } from '@react-navigation/native';
// Importa a imagem da tela de introdução
const IntroImage = require('../../assets/Intro.png')


const IntroScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('Registration');
  };
  return (
    <View style={introScreenStyles.container}>
      {/* Renderiza a imagem da tela de introdução */}
      <Image style={introScreenStyles.Image} source={IntroImage} alt='Image Introduce of app' />
      {/* Renderiza o título da tela de introdução */}
      <Text style={introScreenStyles.Title}>Dog Walkers</Text>
      {/* Renderiza o texto explicativo da tela de introdução */}
      <View style={introScreenStyles.ViewTitle}>
        <Text style={introScreenStyles.SubTitle}>
          {/* Texto explicativo da tela de introdução */}
          The Dog Walkers app revolutionizes pet care by setting tailored objectives to meet your furry friend's needs, tracking their progress, and fostering community sharing.
        </Text>
      </View>
      {/* Renderiza o botão da tela de introdução */}
      <Pressable
        style={introScreenStyles.Button}
        onPress={handleNavigate}
      >
        {/* Texto do botão da tela de introdução */}
        <Text style={introScreenStyles.ButtonTitle}>
          Let's Start
        </Text>
      </Pressable>
    </View>
  );
};

export default IntroScreen;

