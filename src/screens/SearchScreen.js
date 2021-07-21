import React, { useState } from "react";
import { View, StyleSheet, TextInput, Pressable } from "react-native";

import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

import { Menu } from './../components/Menu';
import { Navbar } from './../components/Navbar';
import { TabMenu } from './../components/TabMenu';

import { AntDesign } from '@expo/vector-icons';

const fonts = () => Font.loadAsync({
  'l_bold': require('./../fonts/Lato-Black.ttf'),
  'l_normal': require('./../fonts/Lato-Bold.ttf'),
  'l_light': require('./../fonts/Lato-Regular.ttf')
})

export const SearchScreen = ({ navigation }) => {
  const [font, setFont] = useState(false);
  if (font) {
    return (
      <View style={styles.container}>
        <Navbar />
        <View style={styles.body}>
          <Menu title='Search' />
          <View style={[styles.content, {width: '100%'}]}>
            <View style={styles.searchInputView}>
              <TextInput 
                editable={false} 
                placeholder='Search any drons' 
                plaseholderColor="#8C8C8C" 
                style={styles.searchInput} />
              <Pressable disabled style={styles.clearSearch}>
                <AntDesign name="close" size={24} color="#B4B4B4" />
              </Pressable>
            </View>
          </View>
        </View>
        <TabMenu
          active={'Search'}
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
    width: '100%',
  },
  searchInputView: {
    position: 'relative',
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    paddingVertical: 15,
    paddingLeft: 14,
    paddingRight: 48,
    width: '100%',
  },
  searchInput: {
    fontFamily: 'l_normal', 
    fontSize: 15, 
    lineHeight: 18
  },
  clearSearch: {
    padding: 5,
    position: 'absolute',
    top: 12,
    right: 14,
  },
  contant: {
    height: '100%', 
    justifyContent: 'flex-start', 
    alignItems: 'center',
  }
});