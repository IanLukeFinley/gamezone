import 'react-native-gesture-handler';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import RootDrawer from './routes/drawer';


const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/Fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/Fonts/Nunito-SemiBold.ttf')
});


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <RootDrawer />
      </NavigationContainer>

     );
  } else {
    return (
        <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError = {console.warn}
        />
    )
  }
}
