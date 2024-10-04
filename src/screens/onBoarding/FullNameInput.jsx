/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useCallback } from 'react';

import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    TextInput
} from 'react-native';

import { Button, Text } from 'react-native-paper';

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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { RadioButton } from 'react-native-paper';


import { Searchbar } from 'react-native-paper';
import SkipForNowComponent from '../../customComponents/SkipForNowComponent';
import TopProgressBar from '../../customComponents/TopProgressBar';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const FullNameInput = ( props ) => {

    const theme = useSelector( ( state ) => state.theme?.theme )

    const [firstName, setFirstName] = useState( '' )
    const [lastName, SetLastName] = useState( '' )


    const handleNext = () => {
        props.navigation.navigate( "NameConfirmationPage", { ...props?.route?.params, firstName: firstName, lastName: lastName } )
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
                    <CustomText title="Name" fontFamily={FontDirectory.poppinsBold} color={theme.Primary} fontSize={24} />
                </View>
                <TopProgressBar totalPageCount={10} completedPage={4} />
                <ScrollView style={commonStyles.scrollViewContainer}>

                    <View style={[commonStyles.contentContainer, { minHeight: windowHeight - 65 }]}>
                        <CustomText title={JSON.stringify( props?.route?.params )} fontFamily={FontDirectory.PoppinsMedium} fontSize={14} color={theme.Primary} />

                        <View style={{ flex: 2 }} />

                        <View style={styles.container}>
                            <View>
                                {/* <CustomText title="Name" fontFamily={FontDirectory.PoppinsMedium} fontSize={14} color={theme.Primary} /> */}
                                <View style={[styles.inputOuterContainer, { backgroundColor: theme.SecondaryBackground }]}>
                                    <TextInput
                                        placeholder="First name"
                                        keyboardType="text"
                                        placeholderTextColor={theme.Primary}
                                        fontFamily={FontDirectory.interRegular}
                                        size={14}
                                        style={styles.input}
                                        value={firstName}
                                        color={theme.Primary}
                                        onChangeText={( text ) => { setFirstName( text ) }}
                                    />
                                </View>
                                <View style={[styles.inputOuterContainer, { backgroundColor: theme.SecondaryBackground }]}>
                                    <TextInput
                                        placeholder="Last name"
                                        keyboardType="text"
                                        placeholderTextColor={theme.Primary}
                                        fontFamily={FontDirectory.interRegular}
                                        size={14}
                                        style={styles.input}
                                        value={lastName}
                                        color={theme.Primary}
                                        onChangeText={( text ) => { SetLastName( text ) }}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1 }}>

                            <CustomButton fontSize={18} onPress={handleNext} title="Next" dflt style={{
                                width: windowWidth * 0.88,
                                marginBottom: 18
                            }} />

                            <SkipForNowComponent style={{ marginBottom: 25 }} />
                        </View>
                    </View>
                </ScrollView>




            </SafeAreaView>
        </ImageBackground>
    );
}



export default FullNameInput;




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
    },


    container: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        flex: 1,
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 5
    },
    smsNote: {
        textAlign: 'center',
        marginTop: 20,
    },
    bottomNote: {
        textAlign: 'center',
    },



    inputOuterContainer: {
        flexDirection: 'row',
        width: windowWidth * 0.88,
        borderRadius: 10,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginTop: 6
    }
} );