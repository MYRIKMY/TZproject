import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";

import { AntDesign } from '@expo/vector-icons';

export const LitCard = (props) => {
  return (
    <View style={style.container}>
      <View style={{ position: 'relative' }}>
        <Image
          style={[style.img, {top: 17, width: 160, height: 138,}]}
          source={require('./../images/background.png')}
        />
        <Image
          style={[style.img, {alignSelf: 'center', width: 202, height: 168,}]}
          source={props.modelImg}
        />
      </View>
      <View style={{ justifyContent: 'flex-end', height: '100%' }}>
        <View style={[style.rowBox, {marginBottom: 12 }]}>
          <Text style={style.name}>{props.modelName}</Text>
          <Text style={style.rating}>
            <Text style={style.ratingStar}>★</Text> &shy;
            {props.modelRating}
          </Text>
        </View>
        <View style={style.rowBox}>
          <Text style={style.price}>{props.modelPrice} $</Text>
          {
            (props.isFavorite) ?
            <Pressable onPress={()=>{console.log(props.modelName)}}>
              <AntDesign name="heart" size={24} color="pink" />
            </Pressable> :
            <Pressable onPress={()=>{console.log(props.modelName)}}>
              <AntDesign name="hearto" size={24} color="pink" />
            </Pressable>
          }
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  rowBox: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  container: {
    width: 204,
    height: 248,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    flexDirection: 'column',
    padding: 16,
    marginHorizontal: 8
  },
  img: {
    position:'absolute', 
    alignSelf: 'center'
  },
  price: {
    fontFamily: 'l_normal', 
    fontSize: 16, 
    fontStyle: 'normal', 
    lineHeight: 22, 
    color: 'black'
  },
  rating: {
    fontFamily: 'l_normal', 
    fontSize: 14, 
    fontStyle: 'normal', 
    lineHeight: 17, 
    color: 'black'
  },
  ratingStar: {
    color: '#F5D150', 
    lineHeight: 17, 
    fontSize: 17
  },
  name: {
    fontFamily: 'l_normal', 
    fontSize: 14, 
    fontStyle: 'normal', 
    lineHeight: 17, 
    color: 'black'
  },
})