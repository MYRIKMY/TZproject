import React, { useState } from 'react';
import {TouchableOpacity, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

import { quadracopters } from './../base/base';
import { special } from './../base/base';

import { TabMenu } from '../components/TabMenu';
import { Special } from './../components/Special';
import { Navbar } from './../components/Navbar';
import { Menu } from './../components/Menu';
import { LitCard } from './../components/LittleCard';

const fonts = () => Font.loadAsync({
  'l_bold': require('./../fonts/Lato-Black.ttf'),
  'l_normal': require('./../fonts/Lato-Bold.ttf'),
  'l_light': require('./../fonts/Lato-Regular.ttf')
})

export const HomeScreen = ({ navigation }) => {
  const [font, setFont] = useState(false);

  const [title, setTitle] = useState('All');
  const filter = title;

  const [options, setOptions] = useState([
    { name: 'All', selected: true },
    { name: 'Cheap', selected: false },
    { name: 'Best', selected: false },
    { name: 'Fast', selected: false },
  ]);

  let models= [];
  if (filter == 'Cheap') {
    let lowPrice = quadracopters[0].price;
    quadracopters.map((model) => {
      if (model.price < lowPrice) {
        lowPrice = model.price;
        models.push(model)
      }
    })
  } else if (filter == 'Best') {
    quadracopters.map((model) => {
      if (model.rating >= 4) {
        models.push(model)
      }
    })
  } else if (filter == 'Fast') {
    quadracopters.map((model) => {
      if (model.isFastest) {
        models.push(model)
      }
    })
  } else {
    models=[...quadracopters]
  }

  if (font) {
    return (
      <View style={styles.container}>
        <Navbar />
        <View style={styles.body}>
          <Menu title='Quadrojoy' />
          <Pressable onPress={() => {navigation.navigate(special.pageName, special)}}>
            <Special />
          </Pressable>
          <View>
            <View style={styles.chipsContainer}>
              {
                options.map((button, index) => {
                  return (
                    <TouchableOpacity key={index.toString() + 'chip'} onPress={() => {
                      const buttonState = options;
                      const selectedIndex = buttonState.findIndex(button => button.selected);
                      if (selectedIndex != index) {
                        buttonState[selectedIndex].selected = false;
                        buttonState[index].selected = true;
                      }
                      setOptions(buttonState);
                      setTitle(buttonState[index].name);
                    }}>
                      <View style={[styles.chipsButton, {
                        backgroundColor: button.selected ? '#317AE8' : 'white', 
                        borderColor: button.selected ? '#317AE8' : '#E7E7E7'}]}>
                        <Text style={[styles.chipsButtonText, {color: button.selected ? 'white' : 'black'}]}>{button.name}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
            <View style={{ width: '100%', }}>
              <Text style={styles.chipsTitle}>{title} Quadracopters</Text>
            </View>
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -8, width: 375 }}>
              {
                models.map((model, index) => {
                  return (
                    <Pressable key={index.toString() + 'card'} onPress={() => {
                      navigation.navigate('HomeScreen', {
                        screen: model.pageName,
                        params: model,
                      });
                    }}>
                      <LitCard
                        modelName={ model.name }
                        modelPrice={ model.price }
                        modelRating={ model.rating }
                        modelImg={ model.uri }
                        isFavorite={ model.isFavorite }
                        key={ index }
                      />
                    </Pressable>
                  )
                })
              }
            </ScrollView>
          </View>
        </View>
        <TabMenu
          active={'Home'}
          homePageFunc={() => {navigation.navigate('HomeScreen')}}
          favoritePageFunc={() => {navigation.navigate('FavoritesScreen')}}
          searchPageFunc={() => {navigation.navigate('SearchScreen')}}
          cartPageFunc={() => {navigation.navigate('CartScreen')}}
        />
      </View>
    );
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
  chipsButton: {
    height: 46, 
    width: 78, 
    borderRadius: 12, 
    borderWidth: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginHorizontal: 5
  },
  chipsContainer: {
    maxWidth: '100%', 
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    marginTop: 32, 
    marginBottom: 28
  },
  chipsButtonText: {
    fontFamily: 'l_light', 
    fontSize: 16, 
    fontStyle: 'normal', 
    lineHeight: 22, 
    textAlign: 'center' 
  },
  chipsTitle: {
    fontFamily: 'l_normal', 
    textAlign: 'left', 
    marginBottom: 20, 
    fontSize: 20, 
    fontStyle: 'normal', 
    lineHeight: 24, 
    color: 'black'
  },
});
