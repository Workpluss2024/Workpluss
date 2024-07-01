/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useCallback } from 'react';

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
import Feather from 'react-native-vector-icons/Feather'

import { RadioButton } from 'react-native-paper';


import { Searchbar } from 'react-native-paper';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const PhoneNumberVerifiedConfirmationPage = () => {

    const theme = useSelector( ( state ) => state.theme?.theme )

    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <SafeAreaView>

                <CustomText
                    title="Phone Number  Verified"
                    fontFamily={FontDirectory.poppinsBold}
                    fontSize={30}
                    style={{
                        textAlign: 'center',
                    }}
                    color={theme.Primary} />
                <CustomText title="Your Phone has been verified     successfully !"
                    fontFamily={FontDirectory.PoppinsRegular}
                    fontSize={16}
                    style={{
                        textAlign: 'center',
                        marginTop: 16,
                        marginBottom: 24
                    }}
                    color={theme.Primary} />


                <CustomButton title="Back to login" fontSize={16} dflt={true} style={{ marginTop: 18 }} fontFamily={FontDirectory.poppinsSemiBold} />

            </SafeAreaView>
        </ImageBackground>
    );
}



export default PhoneNumberVerifiedConfirmationPage;




const styles = StyleSheet.create( {
    languageButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 6,
        borderRadius: 10,
        paddingLeft: 36,
        height: 50,
        alignItems: 'center',
        marginVertical: 4
    },
    languageCheckContainer: {
        height: 20,
        width: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
} );