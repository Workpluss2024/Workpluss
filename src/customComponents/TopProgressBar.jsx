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
    Dimensions
} from 'react-native';
import { Button } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux'

import commonStyles from '../assets/styles/commonStyles';
import FontDirectory from '../assets/FontDirectory';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const TopProgressBar = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )
    let progressBarList = []
    for ( let i = 0; i < props?.totalPageCount; i++ ) {
        if ( i < props?.completedPage ) {
            progressBarList.push( true )
        } else {
            progressBarList.push( false )
        }
    }
    return (
        <View style={styles.progressBarContainer}>
            {progressBarList?.map( ( each, index ) => {
                return (
                    <View key={index} style={[styles.eachBar, { backgroundColor: each ? theme.Primary : theme.Accent4 }]} />
                )
            } )}
        </View>
    );
}

const styles = StyleSheet.create( {
    progressBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth * 0.8,
        marginLeft: windowWidth * 0.1
    },
    eachBar: {
        height: 2,
        width: 25
    }
} );

export default TopProgressBar;
