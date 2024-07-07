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


const LanguageSelect = ( props ) => {

    const theme = useSelector( ( state ) => state.theme?.theme )

    const LANGUAGE_LIST = ["English", "Hindi", "Marathi"]

    const [selectedLanguage, setSelectedLanguage] = useState( "English" )

    const [searchQuery, setSearchQuery] = useState( '' );

    const handleNext = () => {
        props.navigation.navigate( "CreateAnAccount" )
    }

    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <SafeAreaView>
                <ScrollView style={commonStyles.scrollViewContainer}>

                    <View style={commonStyles.contentContainer}>
                        <CustomText title="Choose your Language" fontFamily={FontDirectory.poppinsBold} fontSize={24} color={theme.Primary} />

                        <View style={{ marginTop: windowHeight * 0.05 }}>
                            <CustomText title="Language won’t be a barrier for your goals !" fontFamily={FontDirectory.PoppinsRegular} fontSize={15} color={theme.Primary} />

                            <Searchbar
                                placeholder="Search"
                                iconColor={theme.Accent4}
                                onChangeText={setSearchQuery}
                                value={searchQuery}
                                mode="view"
                                placeholderTextColor={theme.Accent4}
                                style={{
                                    backgroundColor: theme.Primary,
                                    borderRadius: 10,
                                    height: 56,
                                    marginTop: windowHeight * 0.03,
                                    marginBottom: 24
                                }}
                                inputStyle={{
                                    fontFamily: FontDirectory.PoppinsRegular,
                                    fontSize: 16,
                                    marginTop: -6
                                }}
                            />
                            {LANGUAGE_LIST?.map( ( eachLanguage, index ) => {

                                const isSelected = eachLanguage == selectedLanguage
                                return (
                                    <TouchableOpacity
                                        onPress={() => setSelectedLanguage( eachLanguage )}
                                        key={index}
                                        style={[styles?.languageButtonContainer, isSelected && { backgroundColor: theme.SecondaryBackground }, true && { borderColor: theme.SecondaryBackground, borderWidth: 2 }]}>
                                        <CustomText fontSize={16} title={eachLanguage} color={isSelected ? theme.PrimaryText : theme.PrimaryBackground} fontFamily={FontDirectory.PoppinsMedium} />
                                        <View style={[styles?.languageCheckContainer, { backgroundColor: isSelected ? theme.PrimaryText : theme.PrimaryBackground }]}>
                                            <Feather name="check" size={10} color={isSelected ? theme.PrimaryBackground : theme.PrimaryText} />
                                        </View>
                                    </TouchableOpacity>
                                )
                            } )}


                            <CustomButton
                                onPress={() => handleNext()}
                                title="Continue" fontSize={16} dflt={true} style={{ marginTop: 18 }} />
                        </View>
                    </View>
                </ScrollView>



            </SafeAreaView>
        </ImageBackground>
    );
}



export default LanguageSelect;




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