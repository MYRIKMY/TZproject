import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export const ModalWindow = (props) => {
  return (
    <View style={style.firstWrap}>
      <View style={style.secondWrap}>
        <Image style={style.car} source={require('./../images/AutoDone.png')} />
        <Text style={style.message}>
          {props.name}, We formalize your order, 
          operator will contact you shortly</Text>
        <TouchableOpacity style={style.button} onPress={props.func}>
          <Text style={style.buttonText}>Okay</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  firstWrap: {
    flex: 1, 
    backgroundColor: '#000000aa', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  secondWrap: {
    paddingHorizontal: 22, 
    backgroundColor: '#fff', 
    width: 343, 
    paddingVertical: 24, 
    borderRadius: 16, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  car: {
    marginBottom: 12, 
    width: 80, 
    height: 60
  },
  message: {
    marginBottom: 12, 
    fontFamily: 'l_light', 
    textAlign: 'center', 
    fontSize: 16, 
    fontStyle: 'normal', 
    lineHeight: 24
  },
  button: {
    paddingVertical: 12, 
    width: 146,
    borderRadius: 8, 
    backgroundColor: '#317ae8'
  },
  buttonText: {
    textAlign: 'center', 
    fontFamily: 'l_light', 
    fontSize: 16, 
    lineHeight: 22, 
    fontStyle: 'normal', 
    color: 'white'
  }
})