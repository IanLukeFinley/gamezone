import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails ({ route, navigation }) {

    const {title, rating, body, key} = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>Title: {JSON.stringify(title)}</Text>
                <Text>Review: {JSON.stringify(body)}</Text>
                <Text>Rating: {JSON.stringify(rating)}</Text> 
            </Card>
        </View>
    )
}
