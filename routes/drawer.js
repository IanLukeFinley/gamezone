import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';


const Drawer = createDrawerNavigator();

export default function RootDrawer() { 
    return (
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen 
            name="HomeStack" 
            component={HomeStack} 
            options={{
                title: 'Home',
              }}
        />
        <Drawer.Screen 
            name="AboutStack" 
            component={AboutStack} 
            options={{
                title: 'About',
              }}    
        />
      </Drawer.Navigator>
    );
  }
  