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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'

import { RadioButton } from 'react-native-paper';


import { Searchbar } from 'react-native-paper';
import SkipForNowComponent from '../../customComponents/SkipForNowComponent';
import TopProgressBar from '../../customComponents/TopProgressBar';
import axiosPOST from '../../commonMethods/axiosPOST';
import endPoints from '../../assets/api/endPoints';
import axiosGET from '../../commonMethods/axiosGET';
import moment from 'moment';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const WorkPreference = ( props ) => {

    const theme = useSelector( ( state ) => state.theme?.theme )

    const LANGUAGE_LIST = ["Flexible (Daily Jobs)", "Steady (Long term jobs)"]

    const [selectedWorkPreference, setSelectedWorkPreference] = useState( "Flexible (Daily Jobs)" )

    const [WorkPreferences, setWorkPreferences] = useState( [] )




    const fetchWorkPreferences = async () => {
        const workPreferenceList = await axiosGET( endPoints?.WORK_PREFERENCE_LIST )
        setWorkPreferences( workPreferenceList )
    }

    useEffect( () => {
        fetchWorkPreferences()
    }, [] )
    const handleNext = async () => {

        console.log( props?.route?.params )

        const dataToPost = {
            ...props?.route?.params,
            // dateOfBirth: moment( props?.route?.params?.dateOfBirth ).format( "DD-MM-YYYY" ),
            // dateOfBirth: new Date( Date.parse( moment( props?.route?.params?.dateOfBirth ).format( "DD-MM-YYYY" ) ) ),
            dateOfBirth: null,
            workPreference: selectedWorkPreference,
            password: "kjhjh"
        }
        const userCreateResponse = await axiosPOST( endPoints?.SIGNUP, dataToPost )

        console.log( userCreateResponse )

        if ( userCreateResponse ) {
            props.navigation.navigate( "GeneralAgreement" )

        }





    }

    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <SafeAreaView>
                <View style={[commonStyles.headerContainer, { marginTop: 48 }]}>
                    <TouchableOpacity>
                        <FontAwesome5 name="chevron-left" color={theme.Primary} size={24} style={commonStyles.headerLeftArrow} />
                    </TouchableOpacity>
                    <CustomText title="Work Preference" fontFamily={FontDirectory.poppinsBold} color={theme.Primary} fontSize={24} />
                </View>
                <TopProgressBar totalPageCount={10} completedPage={8} />

                <View style={commonStyles.contentContainer}>

                    <CustomText title={JSON.stringify( props?.route?.params )} fontFamily={FontDirectory.PoppinsMedium} fontSize={14} color={theme.Primary} />

                    <View style={{ flex: 1 }} />


                    <View style={{ flex: 2 }}>
                        {WorkPreferences?.map( ( eachWorkPreference, index ) => {

                            const isSelected = eachWorkPreference?.id == selectedWorkPreference?.id
                            return (
                                <TouchableOpacity
                                    onPress={() => setSelectedWorkPreference( eachWorkPreference )}
                                    key={index}
                                    style={[styles?.languageButtonContainer, isSelected && { backgroundColor: theme.SecondaryBackground }, true && { borderColor: theme.SecondaryBackground, borderWidth: 2 }]}>
                                    <RadioButton
                                        value="first"
                                        color={theme.Primary}
                                        status={isSelected ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedWorkPreference( eachWorkPreference )}
                                    />
                                    <CustomText fontSize={16} style={{ marginLeft: 12 }} title={eachWorkPreference?.name} color={isSelected ? theme.PrimaryText : theme.PrimaryBackground} fontFamily={FontDirectory.PoppinsMedium} />
                                    {/* <View style={[styles?.languageCheckContainer, { backgroundColor: isSelected ? theme.PrimaryText : theme.PrimaryBackground }]}>
                                            <Feather name="check" size={10} color={isSelected ? theme.PrimaryBackground : theme.PrimaryText} />
                                        </View> */}
                                </TouchableOpacity>
                            )
                        } )}


                    </View>




                    <View style={{ alignItems: 'center', width: windowWidth, flex: 2 }}>
                        <CustomButton title="Next" fontSize={16} dflt={true} style={{ marginBottom: 18, width: windowWidth * 0.9 }} onPress={handleNext} />
                        <SkipForNowComponent />
                    </View>
                </View>




            </SafeAreaView>
        </ImageBackground>
    );
}



export default WorkPreference;




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