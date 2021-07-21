import React from "react";

import { NavigateS } from "./stackNav";

import { FavoritesScreen } from "../screens/FavoritesScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { CartScreen } from "../screens/CartScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const NavigateT = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name='HomeScreen'
          component={NavigateS}
          options={{tabBarVisible:false}}
        />
        <Tab.Screen 
          name='FavoritesScreen'
          component={FavoritesScreen}
          options={{tabBarVisible:false}}
        />
        <Tab.Screen 
          name='SearchScreen'
          component={SearchScreen}
          options={{tabBarVisible:false}}
        />
        <Tab.Screen 
          name='CartScreen'
          component={CartScreen}
          options={{tabBarVisible:false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}