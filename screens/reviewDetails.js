import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import {globalStyles, images} from '../styles/global';
import Card from '../shared/card';


export default function ReviewDetails ({ route, navigation }) {

    const {title, rating, body, key} = route.params;

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
            <Card>
                <Text>Title: {JSON.stringify(title)}</Text>
                <Text>Review: {JSON.stringify(body)}</Text>
                <View style={styles.rating}>
                    <Text>Game Zone rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})
