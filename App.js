import React, { useState } from 'react';
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/Fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/Fonts/Nunito-SemiBold.ttf')
});

const stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="Home" component={Home} />
          <stack.Screen name="Review Details" component={ReviewDetails} />
        </stack.Navigator>
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
