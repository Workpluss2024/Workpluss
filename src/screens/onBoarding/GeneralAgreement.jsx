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
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { RadioButton } from 'react-native-paper';


import { Searchbar } from 'react-native-paper';
import SkipForNowComponent from '../../customComponents/SkipForNowComponent';
import TopProgressBar from '../../customComponents/TopProgressBar';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const GeneralAgreement = ( props ) => {

    const theme = useSelector( ( state ) => state.theme?.theme )

    const LANGUAGE_LIST = ["Questionnaire", "Upload Documents", "Identity Documents", "General Agreement"]

    const [currentStep, setCurrentStep] = useState( 1 )

    const handleNext = () => {
        props.navigation.navigate( "UploadDocuments" )
    }


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
                    <CustomText title="Work Preference" fontFamily={FontDirectory.poppinsBold} color={theme.Primary} fontSize={24} />
                </View>
                <TopProgressBar totalPageCount={10} completedPage={8} />







                <ScrollView style={commonStyles.scrollViewContainer}>

                    <View style={[commonStyles.contentContainer, { justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: windowWidth * 0.06 }]}>
                        <View style={{ flex: 1 }} />

                        <CustomText fontSize={14} style={{ marginLeft: 12 }} title={'Overview'} color={theme.PrimaryText} fontFamily={FontDirectory.PoppinsMedium} />

                        <View style={{ flex: 3 }}>
                            {LANGUAGE_LIST?.map( ( eachLanguage, index ) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => { handleNext() }}
                                        key={index}
                                        disabled={currentStep != index}
                                        style={[styles?.languageButtonContainer, {
                                            backgroundColor: theme.SecondaryBackground,
                                            opacity: currentStep < index ? 0.5 : 1
                                        }]}>
                                        <CustomText fontSize={14} style={{ marginLeft: 12 }} title={index + 1 + ".  " + eachLanguage} color={theme.PrimaryText} fontFamily={FontDirectory.PoppinsMedium} />

                                        {currentStep >= index && <View style={{
                                            height: 30,
                                            width: 30,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: currentStep == index ? theme.Warning : theme.Success,
                                            borderRadius: 50
                                        }} >
                                            <AntDesign size={20} name={currentStep == index ? 'arrowright' : 'check'} />
                                        </View>}
                                    </TouchableOpacity>
                                )
                            } )}


                        </View>




                        <View style={{ alignItems: 'center', width: windowWidth * 0.8, flex: 2, alignSelf: 'center' }}>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 36,
                                alignSelf: 'center',
                                alignItems: 'center'
                            }}>
                                <Fontisto name='locked' color={theme.PrimaryText} size={20} />
                                <CustomText
                                    style={{ marginLeft: 20 }}
                                    color={theme.Primary}
                                    title={'Data protection and privacy are important to us, so your information is transfered securely via https.'}
                                    fontSize={12}
                                    fontFamily={FontDirectory.interRegular} />
                            </View>
                        </View>
                    </View>
                </ScrollView>




            </SafeAreaView>
        </ImageBackground >
    );
}



export default GeneralAgreement;




const styles = StyleSheet.create( {
    languageButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 6,
        borderRadius: 10,
        paddingLeft: 12,
        paddingRight: 24,
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