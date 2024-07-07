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



const AVAILABLE_LANGUAGE_LIST = ["English", "Hindi", "Marathi"]

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
            style={[props?.dflt && { height: 56 }, {
                borderRadius: props?.dflt ? 10 : 50,
                justifyContent: 'center',
                alignItems: 'center',
                ...props?.style,
            }]}
            labelStyle={{
                fontFamily: props?.fontFamily ? props?.fontFamily : FontDirectory.poppinsSemiBold,
                fontSize: props?.fontSize ? props?.fontSize : 12,
                color: theme.Alternate
            }}
            onPress={() => props?.onPress()}>
            {props?.title}
        </Button>
    );
}

const styles = StyleSheet.create( {

} );

export default CustomButton;
