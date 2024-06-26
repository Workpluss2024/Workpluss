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





const CustomButton = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )
    const [isFocused, setIsFocused] = useState( false )
    return (
        <Button
            mode="contained"
            textColor={theme.white}
            buttonColor={isFocused ? theme.SecondaryBackground : theme.Primary}
            onPressIn={() => setIsFocused( true )}
            onPressOut={() => setIsFocused( false )}
            style={{
                ...props?.style,
                borderRadius: 50,
            }}
            labelStyle={{
                fontFamily: props?.fontFamily ? props?.fontFamily : FontDirectory.PoppinsRegular,
                fontSize: props?.fontSize ? props?.fontSize : 12,
                color: theme.Info
            }}
            onPress={() => console.log( 'Pressed' )}>
            {props?.title}
        </Button>
    );
}

const styles = StyleSheet.create( {

} );

export default CustomButton;
