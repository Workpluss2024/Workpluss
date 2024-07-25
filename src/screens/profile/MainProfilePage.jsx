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
import JobPostingComponent from '../../customComponents/JobPostingComponent';
import JobPostingComponentTopCard from '../../customComponents/JobPostingComponentTopCard';
import FontDirectory from '../../assets/FontDirectory';
import CustomDots from '../../customComponents/CustomDots';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { RadioButton } from 'react-native-paper';


import { Searchbar } from 'react-native-paper';
import SkipForNowComponent from '../../customComponents/SkipForNowComponent';
import TopProgressBar from '../../customComponents/TopProgressBar';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const MainProfilePage = ( props ) => {

    const theme = useSelector( ( state ) => state.theme?.theme )


    const handleProfileInformation = () => {
        props?.navigation.navigate( "PersonalInformation" )
    }
    const handleDocuments = () => {
        props?.navigation.navigate( "UploadDocuments" )
    }
    const handleSettings = () => {
        props?.navigation.navigate( "PersonalInformation" )
    }
    const handleLanguage = () => {
        props?.navigation.navigate( "PersonalInformation" )
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
                        <FontAwesome5 name="chevron-left" color={theme.Primary} size={18} style={commonStyles.headerLeftArrow} />
                    </TouchableOpacity>
                    <CustomText title="Profile" fontFamily={FontDirectory.PoppinsMedium} color={theme.Primary} fontSize={14} />
                </View>







                <ScrollView style={commonStyles.scrollViewContainer}>

                    <View style={[commonStyles.contentContainer, { justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: windowWidth * 0.06 }]}>
                        <View style={{ flex: 1 }} />


                        <View style={{ flex: 3 }}>


                            {/* Personal Information */}



                            <View style={styles.profilePicContainer}>
                                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_RuKIRtvySdfJHwKHzHXwiO7bHojnHqTSg&s' }} style={styles.profilePic} />
                                <TouchableOpacity
                                    style={[styles.profilePicChangeButton, { backgroundColor: theme.Alternate }]}>

                                    <MaterialCommunityIcons size={22} style={styles.actionButtonIcon} name={'camera-plus-outline'} color={theme.PrimaryText} />
                                </TouchableOpacity>
                            </View>



                            <TouchableOpacity
                                onPress={() => { handleProfileInformation() }}
                                style={[styles?.profileSettingsButtonsContainer, {
                                    backgroundColor: theme.SecondaryBackground,
                                }]}>
                                <Ionicons size={36} style={styles.actionButtonIcon} name={'person-circle-sharp'} color={theme.PrimaryText} />
                                <CustomText fontSize={14} style={styles.actionButtonText} title={'Personal Information'} color={theme.PrimaryText} fontFamily={FontDirectory.interRegular} />
                                <AntDesign size={14} style={styles.actionButtonIcon} name={'right'} color={theme.PrimaryText} />
                            </TouchableOpacity>


                            {/* Documents */}
                            <TouchableOpacity
                                onPress={() => { handleDocuments() }}
                                style={[styles?.profileSettingsButtonsContainer, {
                                    backgroundColor: theme.SecondaryBackground,
                                }]}>
                                <Octicons size={36} style={styles.actionButtonIcon} name={'stack'} color={theme.PrimaryText} />
                                <CustomText fontSize={14} style={styles.actionButtonText} title={'Documents'} color={theme.PrimaryText} fontFamily={FontDirectory.interRegular} />
                                <AntDesign size={14} style={styles.actionButtonIcon} name={'right'} color={theme.PrimaryText} />
                            </TouchableOpacity>



                            {/* Settings */}
                            <TouchableOpacity
                                onPress={() => { handleSettings() }}
                                style={[styles?.profileSettingsButtonsContainer, {
                                    backgroundColor: theme.SecondaryBackground,
                                }]}>
                                <Octicons size={36} style={styles.actionButtonIcon} name={'gear'} color={theme.PrimaryText} />
                                <CustomText fontSize={14} style={styles.actionButtonText} title={'Settings'} color={theme.PrimaryText} fontFamily={FontDirectory.interRegular} />
                                <AntDesign size={14} style={styles.actionButtonIcon} name={'right'} color={theme.PrimaryText} />
                            </TouchableOpacity>



                            {/* Language */}
                            <TouchableOpacity
                                onPress={() => { handleLanguage() }}
                                style={[styles?.profileSettingsButtonsContainer, {
                                    backgroundColor: theme.SecondaryBackground,
                                }]}>
                                <Entypo size={36} style={styles.actionButtonIcon} name={'language'} color={theme.PrimaryText} />
                                <CustomText fontSize={14} style={styles.actionButtonText} title={'Language'} color={theme.PrimaryText} fontFamily={FontDirectory.interRegular} />
                                <AntDesign size={14} style={styles.actionButtonIcon} name={'right'} color={theme.PrimaryText} />
                            </TouchableOpacity>


                        </View>




                        {/* <View style={{ alignItems: 'center', width: windowWidth * 0.8, flex: 2, alignSelf: 'center' }}>
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
                        </View> */}
                    </View>
                </ScrollView>




            </SafeAreaView>
        </ImageBackground >
    );
}



export default MainProfilePage;




const styles = StyleSheet.create( {
    profileSettingsButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingRight: 6,
        borderRadius: 10,
        paddingLeft: 14,
        paddingRight: 14,
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
    },
    actionButtonIcon: {
        // flex: 1,
    },
    actionButtonText: {
        flex: 1,
        marginLeft: 20
    },
    profilePicContainer: {
        alignSelf: 'center',
        marginBottom: 40,
        alignItems: 'flex-end'
    },
    profilePic: {
        height: 120,
        width: 120,
        borderRadius: 120
    },
    profilePicChangeButton: {
        height: 38,
        width: 38,
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -36,
        marginRight: 6
    }
} );