import { View, StyleSheet, Text, Pressable } from "react-native"
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const TabMenu = (props) => {
  return (
    <View style={style.div}>
      <Pressable style={style.icon} onPress={props.homePageFunc}>
        <Ionicons 
          name="home-outline" size={32} 
          color={props.active == 'Home' ? '#317ae8' : '#939399'} />
        <Text style={style.iconSign}>home</Text>
      </Pressable>

      <Pressable style={style.icon} onPress={props.favoritePageFunc}>
        <AntDesign 
          name="hearto" size={32} 
          color={props.active == 'Favorite' ? '#317ae8' : '#939399'} />
        <Text style={style.iconSign}>favorite</Text>
      </Pressable>

      <Pressable style={style.icon} onPress={props.searchPageFunc}>
        <AntDesign 
          name="search1" size={32} 
          color={props.active == 'Search' ? '#317ae8' : '#939399'} />
        <Text style={style.iconSign}>search</Text>
      </Pressable>

      <Pressable style={style.icon} onPress={props.cartPageFunc}>
        <AntDesign 
          name="shoppingcart" size={32} 
          color={props.active == 'Cart' ? '#317ae8' : '#939399'} />
        <Text style={style.iconSign}>cart</Text>
      </Pressable>
      
      
      
    </View>
  )
}

const style = StyleSheet.create({
  div: {
    minHeight: 96,
    width: '100%',
    backgroundColor: 'white',

    shadowColor: "#000",
    shadowOffset: {
	    width: 2,
	    height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,

    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingHorizontal: 11,
    paddingTop: 24,
    flexDirection: 'row'
  },
  icon: {
    width: 50,
    height: 44,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  iconSign: {
    fontFamily:'l_light', 
    fontSize: 12, 
    fontStyle: 'normal', 
    lineHeight: 14, 
    color: '#939399'
  }
});