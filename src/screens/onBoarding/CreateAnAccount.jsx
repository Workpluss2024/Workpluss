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
import SkipForNowComponent from '../../customComponents/SkipForNowComponent';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const CreateAnAccount = ( props ) => {

    const theme = useSelector( ( state ) => state.theme?.theme )

    const LANGUAGE_LIST = ["English", "Hindi", "Marathi"]

    const [selectedLanguage, setSelectedLanguage] = useState( "English" )

    const [searchQuery, setSearchQuery] = useState( '' );


    const handleNext = () => {
        props.navigation.navigate( "ThirdPartyLoginOptions" )
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
                        <CustomText title="Create an Account" fontFamily={FontDirectory.poppinsBold} fontSize={24} color={theme.Primary} />
                        <TouchableOpacity
                            onPress={() => handleNext()}
                            style={{
                                height: 44,
                                width: 44,
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 18
                            }}>
                            <Image source={ImageDirectory.right_arrow_in_circle} style={{ height: 42, width: 42, resizeMode: 'contain' }} />

                        </TouchableOpacity>
                        <SkipForNowComponent absolute onSkip={() => handleNext()} />
                    </View>
                </ScrollView>



            </SafeAreaView>
        </ImageBackground>
    );
}



export default CreateAnAccount;




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