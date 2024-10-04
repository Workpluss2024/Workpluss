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
import axiosGET from '../../commonMethods/axiosGET';
import endPoints from '../../assets/api/endPoints';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const GenderSelect = ( props ) => {

    const theme = useSelector( ( state ) => state.theme?.theme )

    const [genderList, setGenderList] = useState( [] )

    const [selectedGender, setSelectedGender] = useState( "Female" )



    const fetchGenderList = async () => {
        const responseGenderList = await axiosGET( endPoints?.GENDER_LIST )
        setGenderList( responseGenderList )
    }

    useEffect( () => {
        fetchGenderList()
    }, [] )


    const [searchQuery, setSearchQuery] = useState( '' );

    const handleNext = () => {
        props.navigation.navigate( "FullNameInput", { ...props?.route?.params, gender: selectedGender } )
    }

    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <SafeAreaView style={commonStyles.onBoardingSafeArea}>
                <View style={[commonStyles.headerContainer, { marginTop: 48 }]}>
                    <TouchableOpacity>
                        <FontAwesome5 name="chevron-left" color={theme.Primary} size={24} style={commonStyles.headerLeftArrow} />
                    </TouchableOpacity>
                    <CustomText title="Gender" fontFamily={FontDirectory.poppinsBold} color={theme.Primary} fontSize={24} />
                </View>
                <TopProgressBar totalPageCount={10} completedPage={3} />

                <View style={commonStyles.contentContainer}>
                    <CustomText title={JSON.stringify( props?.route?.params )} fontFamily={FontDirectory.PoppinsMedium} fontSize={14} color={theme.Primary} />

                    <View style={{ flex: 1 }} />

                    <View style={{ flex: 3 }}>
                        {genderList?.map( ( eachGender, index ) => {

                            const isSelected = eachGender?.id == selectedGender?.id
                            return (
                                <TouchableOpacity
                                    onPress={() => setSelectedGender( eachGender )}
                                    key={index}
                                    style={[styles?.languageButtonContainer, isSelected && { backgroundColor: theme.SecondaryBackground }, true && { borderColor: theme.SecondaryBackground, borderWidth: 2 }]}>
                                    <RadioButton
                                        value="first"
                                        color={theme.Primary}
                                        status={isSelected ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedGender( eachGender )}
                                    />
                                    <CustomText fontSize={16} style={{ marginLeft: 12 }} title={eachGender?.name} color={isSelected ? theme.PrimaryText : theme.PrimaryBackground} fontFamily={FontDirectory.PoppinsMedium} />
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



export default GenderSelect;




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