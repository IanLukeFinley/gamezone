import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {globalStyles} from '../styles/global';

export default function ReviewDetails ({ route, navigation }) {

    const {title, rating, body, key} = route.params;

    return (
        <View style={globalStyles.container}>
            <Text>Title: {JSON.stringify(title)}</Text>
            <Text>Rating: {JSON.stringify(rating)}</Text>
            <Text>Review: {JSON.stringify(body)}</Text>
        </View>
    )
}
