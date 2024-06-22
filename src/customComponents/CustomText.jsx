/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
    StyleSheet,
} from 'react-native';
import { Text } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux'

import commonStyles from '../assets/styles/commonStyles';
import FontDirectory from '../assets/FontDirectory';





const CustomText = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )
    return (
        <Text
            style={{
                color: props?.color ? props?.color : theme.PrimaryText,
                fontFamily: props?.fontFamily ? props?.fontFamily : FontDirectory.PoppinsRegular,
                fontSize: props?.fontSize ? props?.fontSize : 12,
                ...props?.style
            }}
        >{props?.title}</Text>
    );
}

const styles = StyleSheet.create( {

} );

export default CustomText;
