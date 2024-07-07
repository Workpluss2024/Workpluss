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


const ThirdPartyLoginOptions = ( props ) => {

    const theme = useSelector( ( state ) => state.theme?.theme )

    const LANGUAGE_LIST = ["English", "Hindi", "Marathi"]

    const [selectedLanguage, setSelectedLanguage] = useState( "English" )

    const [searchQuery, setSearchQuery] = useState( '' );


    const handleNext = () => {
        props.navigation.navigate( "PhoneEmailInputPage" )
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
                        <View style={styles.loginOptionsContainer}>

                            <TouchableOpacity style={styles.loginButton}>
                                <Image source={ImageDirectory.login_facebook} style={styles.loginIcons} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginButton}>
                                <Image source={ImageDirectory.login_google} style={styles.loginIcons} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginButton}>
                                <Image source={ImageDirectory.login_apple} style={styles.loginIcons} />
                            </TouchableOpacity>
                        </View>






                        <SkipForNowComponent onSkip={() => handleNext()} absolute />
                    </View>
                </ScrollView>



            </SafeAreaView>
        </ImageBackground>
    );
}



export default ThirdPartyLoginOptions;




const styles = StyleSheet.create( {
    loginIcons: {
        height: 60,
        width: 60,
        resizeMode: 'contain'
    },
    loginButton: {
        marginHorizontal: 8
    },
    loginOptionsContainer: {
        flexDirection: 'row',
        marginBottom: 24
    }
} );