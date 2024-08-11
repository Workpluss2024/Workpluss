/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import { Button } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux'

import commonStyles from '../assets/styles/commonStyles';
import FontDirectory from '../assets/FontDirectory';
import CustomText from './CustomText';


import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const StarRating = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )


    const rating = props?.rating

    const fullStars = Math.floor( rating );
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;



    return (
        <View style={[styles.container, props?.style]}>
            {[...Array( fullStars )].map( ( _, index ) => (
                <FontAwesome key={`full-${ index }`} name="star" style={styles.star} />
            ) )}
            {halfStars === 1 && <FontAwesome name="star-half" style={styles.star} />}
            {[...Array( emptyStars )].map( ( _, index ) => (
                <FontAwesome key={`empty-${ index }`} name="star-o" style={styles.star} />
            ) )}
        </View>
    );
};

const styles = StyleSheet.create( {
    container: {
        flexDirection: 'row',
    },
    star: {
        color: 'gold',
        fontSize: 20,
        marginHorizontal: 2,
    },
} );

export default StarRating;

