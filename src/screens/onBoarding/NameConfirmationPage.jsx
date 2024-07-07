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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'

import { RadioButton } from 'react-native-paper';


import { Searchbar } from 'react-native-paper';
import SkipForNowComponent from '../../customComponents/SkipForNowComponent';
import TopProgressBar from '../../customComponents/TopProgressBar';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const NameConfirmationPage = () => {

    const theme = useSelector( ( state ) => state.theme?.theme )

    const LANGUAGE_LIST = ["Yes", "No"]

    const [selectedLanguage, setSelectedLanguage] = useState( "Yes" )


    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <SafeAreaView>
                <View style={commonStyles.headerContainer}>
                    <TouchableOpacity>
                        <FontAwesome5 name="chevron-left" color={theme.Primary} size={24} style={commonStyles.headerLeftArrow} />
                    </TouchableOpacity>
                    <CustomText title="Name confrimation" fontFamily={FontDirectory.poppinsBold} color={theme.Primary} fontSize={24} />
                </View>
                <TopProgressBar totalPageCount={10} completedPage={5} />
                <ScrollView style={commonStyles.scrollViewContainer}>

                    <View style={commonStyles.contentContainer}>
                        <View style={{ flex: 3 }} />

                        <CustomText fontSize={14} title="Name matches your Aadhar card ?" color={theme.Primary} fontFamily={FontDirectory.PoppinsMedium}
                            style={{ alignSelf: 'flex-start', marginLeft: windowWidth * 0.06, marginBottom: 12 }} />
                        <View style={{ flex: 3 }}>
                            {LANGUAGE_LIST?.map( ( eachLanguage, index ) => {

                                const isSelected = eachLanguage == selectedLanguage
                                return (
                                    <TouchableOpacity
                                        onPress={() => setSelectedLanguage( eachLanguage )}
                                        key={index}
                                        style={[styles?.languageButtonContainer, isSelected && { backgroundColor: theme.SecondaryBackground }, true && { borderColor: theme.SecondaryBackground, borderWidth: 2 }]}>
                                        <RadioButton
                                            value="first"
                                            color={theme.Primary}
                                            status={isSelected ? 'checked' : 'unchecked'}
                                            onPress={() => setSelectedLanguage( eachLanguage )}
                                        />
                                        <CustomText fontSize={16} style={{ marginLeft: 12 }} title={eachLanguage} color={isSelected ? theme.PrimaryText : theme.PrimaryBackground} fontFamily={FontDirectory.PoppinsMedium} />
                                        {/* <View style={[styles?.languageCheckContainer, { backgroundColor: isSelected ? theme.PrimaryText : theme.PrimaryBackground }]}>
                                            <Feather name="check" size={10} color={isSelected ? theme.PrimaryBackground : theme.PrimaryText} />
                                        </View> */}
                                    </TouchableOpacity>
                                )
                            } )}


                        </View>




                        <View style={{ alignItems: 'center', width: windowWidth, flex: 2 }}>
                            <CustomButton title="Next" fontSize={16} dflt={true} style={{ marginBottom: 18, width: windowWidth * 0.9 }} />
                            <SkipForNowComponent />
                        </View>
                    </View>
                </ScrollView>




            </SafeAreaView>
        </ImageBackground>
    );
}



export default NameConfirmationPage;




const styles = StyleSheet.create( {
    languageButtonContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingRight: 6,
        borderRadius: 10,
        paddingLeft: 12,
        height: 50,
        alignItems: 'center',
        marginVertical: 4,
        width: windowWidth * 0.88
    },
    languageCheckContainer: {
        height: 20,
        width: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
} );