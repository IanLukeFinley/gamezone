import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';

export default function Home ({ navigation }) {

    const [reviews, setReviews ] = useState([
        {title: 'Kingdom Death: Monster', rating: 5, body: 'text...', key: 1 },
        {title: 'Blood on the Clocktower', rating: 4, body: 'text 2...', key: 2 },
        {title: 'Oath', rating: 3, body: 'text3...', key: 3 },
    ])

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => {navigation.navigate('Review Details', item)}}>
                        <Card>
                            <Text style={globalStyles.title}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </ImageBackground>
    )
}
