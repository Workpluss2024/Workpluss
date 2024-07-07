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
    TouchableOpacity,
    View,
} from 'react-native';
import { Button } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux'

import commonStyles from '../assets/styles/commonStyles';
import FontDirectory from '../assets/FontDirectory';
import CustomText from './CustomText';



const AVAILABLE_LANGUAGE_LIST = ["English", "Hindi", "Marathi"]

const SkipForNowComponent = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )
    const [isFocused, setIsFocused] = useState( false )
    return (
        <View style={[
            props?.absolute && styles.absolutePositionContainer,
            styles?.container, {
                ...props?.style
            }]}>
            <TouchableOpacity onPress={() => props?.onSkip()}>
                <CustomText title="Skip now" fontFamily={FontDirectory.interRegular} fontSize={14} style={styles.skipNowText} />
            </TouchableOpacity>


            <CustomText title="Without creating a profile, you can't apply for jobs" fontFamily={FontDirectory.interRegular} fontSize={12} />
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        alignItems: 'center',
        alignSelf: 'center'
    },
    absolutePositionContainer: {
        position: 'absolute',
        bottom: 68
    },
    skipNowText: {
        textDecorationLine: 'underline',
        marginBottom: 4
    }
} );

export default SkipForNowComponent;
