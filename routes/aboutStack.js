import 'react-native-gesture-handler';
import React, { useState } from 'react';
import About from '../screens/about';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../shared/header';

const aboutStack = createNativeStackNavigator();

export default function AboutStack () {
    return (
      <aboutStack.Navigator
        screenOptions = {{
          headerStyle: {
            backgroundColor: '#0F8128',
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      <aboutStack.Screen
        name="About"
        component={About}
        options={({ navigation, route }) => ({
            headerTitle: () => <Header navigation={navigation} title='About'/>,
          })}
      />
      </aboutStack.Navigator>
    )
  }