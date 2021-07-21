import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

import { special } from "../base/base";

export const Special = () => {
  return (
    <LinearGradient 
      colors={['#317AE8', '#CAF9FF']} 
      start={{x: 0.1, y: 0}} 
      end={{x: 1, y: 1}}
      style={style.wrap}>
      <View style={style.container}>
        <Image
          style={style.img}
          source={special.uri}
        />
        <Text style={[style.text, style.slogan]}>Need for Speed</Text>
        <Text style={[style.text, style.specialName]}>{special.name}</Text>
        <Text style={[style.text, style.specialPrise]}>{special.price} $</Text>
      </View>
    </LinearGradient>
  )
}

const style = StyleSheet.create({
  text: {
    fontFamily: 'l_normal', 
    fontStyle: 'normal',  
    color: 'white',
  },
  slogan: {
    fontSize: 14, 
    lineHeight: 17,
  },
  specialName: {
    fontFamily: 'l_bold', 
    fontSize: 24, 
    lineHeight: 32,
  },
  specialPrise: {
    fontSize: 20, 
    lineHeight: 24,
  },
  wrap: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
    borderRadius: 20,
  },
  img: {
    height: 164, 
    width: 233, 
    position: 'absolute', 
    top: 0, 
    right: 0 
  },
  container: {
    minWidth: '100%',
    height: 164,
    justifyContent: "flex-end",
    padding: 20,
    position: 'relative',
  },
});