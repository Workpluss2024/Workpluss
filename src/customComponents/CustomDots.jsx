/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Button } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux'

import commonStyles from '../assets/styles/commonStyles';
import FontDirectory from '../assets/FontDirectory';





const CustomDots = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )
    return (
        <View style={[styles.dots, { backgroundColor: props?.selected ? theme.Primary : theme.PrimaryBackground }]} />
    );
}

const styles = StyleSheet.create( {
    dots: {
        height: 6,
        width: 6,
        borderRadius: 6,
        marginHorizontal: 4
    }
} );


export default CustomDots;