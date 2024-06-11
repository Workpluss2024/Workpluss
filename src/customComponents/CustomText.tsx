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

import type { RootState } from '../redux/store'
import commonStyles from '../assets/styles/commonStyles';





const CustomText = (props: any) => {
    const theme = useSelector((state: RootState) => state.theme?.theme)
    return (
        <Text variant="titleSmall">{props?.title}</Text>
    );
}

const styles = StyleSheet.create({

});

export default CustomText
    ;
