import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground, 
    Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home ({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false)

    const [reviews, setReviews ] = useState([
        {
            title: 'Kingdom Death: Monster', 
            rating: 5, 
            body: 'text...', 
            key: 1,
            change:  function(id){  //this is very wet. Fix it once edit works
                setReviews((prevReviews) => {
                    return prevReviews.filter(review => review.key != id)
                });
                navigation.navigate('Home') 
            },
        },
        {
            title: 'Blood on the Clocktower', 
            rating: 4, 
            body: 'text 2...', 
            key: 2,
            change:  function(id){  //this is very wet. Fix it once edit works
                setReviews((prevReviews) => {
                    return prevReviews.filter(review => review.key != id)
                });
                navigation.navigate('Home') 
            },
        },
        {
            title: 'Oath 2', 
            rating: 3, 
            body: 'text3...', 
            key: 3,
            change:  function(id){  //this is very wet. Fix it once edit works
                setReviews((prevReviews) => {
                    return prevReviews.filter(review => review.key != id)
                });
                navigation.navigate('Home') 
            },
        },
    ])

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((prevReviews) => {
            return [review, ...prevReviews]
        });
        setModalOpen(false);
    }


    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent} >
                        <MaterialIcons 
                            name='close'
                            size= {24}
                            style={{
                                ...styles.toggleModal,
                                ...styles.modalClose

                            }}
                            onPress= { () => {setModalOpen(false)} }
                        />
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons 
                name='add'
                size= {24}
                style={styles.toggleModal}
                onPress= { () => {setModalOpen(true)} }
            />
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

const styles = StyleSheet.create({
    toggleModal: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
})