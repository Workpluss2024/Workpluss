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

import type { RootState } from '../redux/store'
import commonStyles from '../assets/styles/commonStyles';





const CustomButton = (props: any) => {
    const theme = useSelector((state: RootState) => state.theme?.theme)
    const [isFocused, setIsFocused] = useState(false)
    return (
        <Button
            mode="contained"
            textColor={theme.white}
            buttonColor={isFocused ? theme.hover : theme.violet}
            onPressIn={() => setIsFocused(true)}
            onPressOut={() => setIsFocused(false)}
            style={{
                borderRadius: 10,
                marginTop: 50
            }}
            onPress={() => console.log('Pressed')}>
            {props?.title}
        </Button>
    );
}

const styles = StyleSheet.create({

});

export default CustomButton;
