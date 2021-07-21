import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, } from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { Navbar } from "../components/Navbar";
import { MenuBack } from "../components/MenuBack";
import { Form } from "../components/Form";

const fonts = () => Font.loadAsync({
  'l_bold': require('./../fonts/Lato-Black.ttf'),
  'l_normal': require('./../fonts/Lato-Bold.ttf'),
  'l_light': require('./../fonts/Lato-Regular.ttf')
})

export const Product = ({ route, navigation }) => {
  const [font, setFont] = useState(false);
  
  const accept = () => {
      setModalView(true)
  }

  if (font) {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Navbar />
        <View style={[styles.body, {paddingBottom: 30}]}>
          
          <MenuBack func={() => {navigation.goBack()}}/>
          <View style={styles.imgBox}>
            <Image 
              style={[styles.img, {top: 40, width: 245, height: 213}]} 
              source={require('./../images/background.png')} />
            <Image 
              style={[styles.img, {top: 0, width: 343, height: 281}]} 
              source={route.params.uri} />
          </View>
          <Text style={styles.shortDescription}>Ordinary quadracopter</Text>
          <View style={styles.rowBox}>
            <Text style={styles.name}>{route.params.name}</Text>
            <Text style={styles.rating}>
              <Text style={styles.ratingStar}>★</Text> &shy;
              {route.params.rating}
            </Text>
          </View>
          <View style={[styles.rowBox,{marginTop: 8}]}>
            <Text style={styles.price}>{route.params.price} $</Text>
            
          </View>
          <Text style={styles.description}>
            The Mavic 2 offers iconic Hasselblad image 
            quality on Pro and a high-performance zoom 
            lens on Zoom.
          </Text>
          <Form func={accept} />
        </View>
      </View>
      </ScrollView>
    );
  } else {
    return (
      <AppLoading onError={console.warn} startAsync={fonts} onFinish={() => setFont(true)} />
    )
  }
}

const styles = StyleSheet.create({
  rowBox: {flexDirection: 'row', justifyContent: 'space-between',width: '100%',},
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%'
  },
  body: {
    position: 'relative',
    paddingHorizontal: 15,
    paddingTop: 8,
    paddingBottom: 126,
    alignItems: 'center',
    width: '100%'
  },
  imgBox: {
    width: '100%', 
    position: 'relative'
  },
  img: {
    position: 'absolute', 
    alignSelf: 'center',
  },
  shortDescription: {
    marginTop: 305,
    width: '100%', 
    textAlign: 'left', 
    fontFamily: 'l_light', 
    fontSize: 16, 
    lineHeight: 22, 
    fontStyle: 'normal'
  },
  name: {
    fontFamily: 'l_bold', 
    fontSize: 28, 
    lineHeight: 36, 
    fontStyle: 'normal'
  },
  price: {
    fontFamily: 'l_normal', 
    fontSize: 20, 
    lineHeight: 24, 
    fontStyle: 'normal', 
    color: '#317ae8'
  },
  rating: {
    fontFamily: 'l_normal', 
    fontSize: 14, 
    lineHeight: 17, 
    fontStyle: 'normal'
  },
  ratingStar: {
    fontSize: 17, 
    lineHeight: 17, 
    color: '#F5D150'
  },
  description: {
    fontFamily: 'l_light', 
    fontSize: 16, 
    lineHeight: 22, 
    fontStyle: 'normal', 
    color: '#939399', 
    marginTop: 12
  },

});
