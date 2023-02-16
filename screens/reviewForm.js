import React from 'react';
import {StyleSheet, Button, TextInput, View, Text} from 'react-native';
import {globalStyles} from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is num 1-5', 'Rating must be between 1 and 5', (value) => {
        return parseInt(value) < 6 && parseInt(value) > 0
    })
})

export default function ReviewForm ({ addReview }) {

    return (
        <View style={globalStyles.container}>
            <Formik
                validationSchema = {reviewSchema}
                initialValues={{
                    title: '',
                    body: '',
                    rating: ''
                }}
                onSubmit={values => {
                    addReview(values);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={handleChange('title')}
                            value={values.title}
                        />
                        <TextInput 
                            multiline
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={handleChange('body')}
                            value={values.body}
                        />
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={handleChange('rating')}
                            value={values.rating}
                            keyboardType= 'numeric'
                        />
                        <Button title='submit' color='maroon'  onPress={handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}