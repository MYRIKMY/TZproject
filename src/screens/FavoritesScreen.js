import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native"

import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

import { Menu } from './../components/Menu';
import { Navbar } from './../components/Navbar';
import { TabMenu } from './../components/TabMenu';

const fonts = () => Font.loadAsync({
  'l_bold': require('./../fonts/Lato-Black.ttf'),
  'l_normal': require('./../fonts/Lato-Bold.ttf'),
  'l_light': require('./../fonts/Lato-Regular.ttf')
})

export const FavoritesScreen = ({ navigation }) => {
  const [font, setFont] = useState(false);
  if (font) {
    return (
      <View style={styles.container}>
        <Navbar></Navbar>
        <View style={styles.body}>
          <Menu title='Favorite' />
          <View style={styles.content}>
            <Text style={styles.plaseholder}>Choose the product you like</Text>
          </View>
        </View>
        <TabMenu
          active={'Favorite'}
          homePageFunc={() => {navigation.navigate('HomeScreen')}}
          favoritePageFunc={() => {navigation.navigate('FavoritesScreen')}}
          searchPageFunc={() => {navigation.navigate('SearchScreen')}}
          cartPageFunc={() => {navigation.navigate('CartScreen')}}
        />
      </View>
    )
  } else {
    return (
      <AppLoading onError={console.warn} startAsync={fonts} onFinish={() => setFont(true)} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%'
  },
  body: {
    position: 'relative',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 126,
    alignItems: 'center',
    width: '100%'
  },
  content: {
    width: '100%', 
    height: '100%', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    paddingTop: 20,
  },
  plaseholder: {
    fontFamily: 'l_light', 
    fontSize: 24, 
    lineHeight: 32, 
    textAlign: 'center', 
    color: '#939399',
  }
})
