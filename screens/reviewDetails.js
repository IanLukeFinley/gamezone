import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import {globalStyles, images} from '../styles/global';
import Card from '../shared/card';
import FlatButton from '../shared/button';

export default function ReviewDetails ({ route, navigation }) {

    const { title, rating, body, key, change } = route.params;
    const id = JSON.stringify(key)



    const editReview = () => {
        console.log(JSON.stringify(id));
    }


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
            <View style={styles.twoButton}>
                <FlatButton text='Delete' onPress={() => change(id)}/>
                <FlatButton text='Edit' onPress={editReview}/>
            </View>
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
    },
    twoButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    }
})
