import React, { useState } from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/Fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/Fonts/Nunito-SemiBold.ttf')
});

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Home />
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
