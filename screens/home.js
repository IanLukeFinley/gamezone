import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import {globalStyles} from '../styles/global';

export default function Home ({ navigation }) {

    const [reviews, setReviews ] = useState([
        {title: 'Zelda, Breath of the Wild', rating: 5, body: 'text...', key: 1 },
        {title: 'Pokemon Silver', rating: 4, body: 'text 2...', key: 2 },
        {title: 'Final Fantasy II', rating: 3, body: 'text3...', key: 3 },
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => {navigation.navigate('Review Details', item)}}>
                        <Text style={globalStyles.title}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
