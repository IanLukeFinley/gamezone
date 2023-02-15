import 'react-native-gesture-handler';
import React, { useState } from 'react';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const homeStack = createNativeStackNavigator();

export default function HomeStack () {
    return (
      <homeStack.Navigator
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
          <homeStack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Game Zone',
            }}
          />
          <homeStack.Screen 
            name="Review Details" 
            component={ReviewDetails} 
            options={{
              title: 'Review Details',
            }}
          />
          </homeStack.Navigator>
    )
  }