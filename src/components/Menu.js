import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";

export const Menu = (props) => {
  return (
    <View style={style.div}>
      <Text style={style.title}>{ props.title }</Text>
      <Pressable disabled><Image
        style={style.img}
        source={require('./../images/burgerMenu.png')}
      /></Pressable>
    </View>
  )
}

const style = StyleSheet.create({
  div: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    paddingLeft: 6,
    paddingRight: 10,
    width: '100%'
  },
  title: {
    fontFamily: 'l_bold', 
    fontSize: 24, 
    fontStyle: 'normal', 
    lineHeight: 32, 
    color: 'black'
  },
  img: {
    height: 28, 
    width: 28
  },
})