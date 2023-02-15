import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {globalStyles} from '../styles/global';

export default function Home ({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Review Details')
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button onPress={pressHandler} title="Go to Details"/>
        </View>
    )
}
