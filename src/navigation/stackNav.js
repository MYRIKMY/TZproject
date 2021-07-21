import React from "react";

import { Product } from "../screens/Product";
import { HomeScreen } from "../screens/HomeScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const NavigateS = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
              title: 'Quadrajoy',
              headerShown: false,
            }}
        />
        <Stack.Screen
          name='Air'
          component={Product}
          options={{title: 'Air', headerShown: false,}}
        />
        <Stack.Screen
          name='Matrice'
          component={Product}
          options={{title: 'Matrice', headerShown: false,}}
        />
        <Stack.Screen
          name='Mavic'
          component={Product}
          options={{title: 'Mavic', headerShown: false,}}
        />
        <Stack.Screen
          name='UdoDron'
          component={Product}
          options={{title: 'UdoDron', headerShown: false,}}
        />
      </Stack.Navigator>
  )
}