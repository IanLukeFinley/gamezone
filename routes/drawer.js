import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';


const Drawer = createDrawerNavigator();

export default function RootDrawer() { // Move this out later
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="AboutStack" component={AboutStack} />
      </Drawer.Navigator>
    );
  }
  