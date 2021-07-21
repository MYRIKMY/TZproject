import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

import { AntDesign } from '@expo/vector-icons';

export const MenuBack = (props) => {
  return (
    <View style={style.div}>
      <Pressable onPress={props.func}>
        <AntDesign name="left" size={24} color="black" />
      </Pressable>
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
  }
})