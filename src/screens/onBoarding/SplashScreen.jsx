/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useCallback, useEffect } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    FlatList,
    SafeAreaView
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'

import commonStyles from '../../assets/styles/commonStyles';
import CustomButton from '../../customComponents/CustomButton';
import CustomText from '../../customComponents/CustomText';
import ImageDirectory from '../../assets/ImageDirectory';
import SegmentedControl from '../../customComponents/SegmentControl';
import { Ionicons, MaterialIcons, Entypo } from 'react-native-vector-icons';
import JobPostingComponent from '../../customComponents/JobPostingComponent';
import JobPostingComponentTopCard from '../../customComponents/JobPostingComponentTopCard';
import FontDirectory from '../../assets/FontDirectory';
import CustomDots from '../../customComponents/CustomDots';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'




const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const SplashScreen = ( props ) => {

    const theme = useSelector( ( state ) => state.theme?.theme )
    const nagigateToNextPage = () => {
        setTimeout( () => { props.navigation.navigate( "LanguageSelect" ) }, 1000 )
    }
    useEffect( () => {
        nagigateToNextPage()
    }, [] )

    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <SafeAreaView>

                <Image source={ImageDirectory.logo} style={styles.logo} />

            </SafeAreaView>
        </ImageBackground>
    );
}



export default SplashScreen;




const styles = StyleSheet.create( {
    logo: {
        height: 29,
        resizeMode: 'contain'
    }
} );