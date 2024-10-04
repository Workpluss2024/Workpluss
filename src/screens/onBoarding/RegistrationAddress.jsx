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


const RegistrationAddress = ( props ) => {

    const theme = useSelector( ( state ) => state.theme?.theme )

    const [streetName, setStreetName] = useState( '' )
    const [doorNumber, setDoorNumber] = useState( '' )
    const [nearBy, setNearBy] = useState( '' )
    const [state, setState] = useState( '' )
    const [city, setCity] = useState( '' )
    const [zipCode, setZipCode] = useState( '' )







    const handleNext = () => {
        props.navigation.navigate( "GenderSelect", { ...props?.route?.params, streetName: streetName, doorNumber: doorNumber, nearBy: nearBy, state: state, city: city, zipCode: zipCode } )
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
                    <CustomText title="Registration address" fontFamily={FontDirectory.poppinsBold} color={theme.Primary} fontSize={24} />
                </View>
                <TopProgressBar totalPageCount={10} completedPage={2} />
                <ScrollView style={commonStyles.scrollViewContainer}>

                    <View style={[commonStyles.contentContainer, { minHeight: windowHeight - 65 }]}>

                        <View style={{ flex: 1 }} />

                        <View style={styles.container}>
                            <View>
                                <CustomText title={JSON.stringify( props?.route?.params )} fontFamily={FontDirectory.PoppinsMedium} fontSize={14} color={theme.Primary} />
                                <CustomText title="Address" fontFamily={FontDirectory.PoppinsMedium} fontSize={14} color={theme.Primary} />
                                <View style={[styles.inputOuterContainer, { backgroundColor: theme.SecondaryBackground }]}>
                                    <TextInput
                                        placeholder="Street name"
                                        keyboardType="text"
                                        placeholderTextColor={theme.Primary}
                                        fontFamily={FontDirectory.interRegular}
                                        size={14}
                                        color={theme.Primary}
                                        style={styles.input}
                                        value={streetName}
                                        onChangeText={( text ) => { setStreetName( text ) }}
                                    />
                                </View>
                                <View style={[styles.inputOuterContainer, { backgroundColor: theme.SecondaryBackground }]}>
                                    <TextInput
                                        placeholder="Door number"
                                        keyboardType="text"
                                        placeholderTextColor={theme.Primary}
                                        fontFamily={FontDirectory.interRegular}
                                        size={14}
                                        color={theme.Primary}
                                        style={styles.input}
                                        value={doorNumber}
                                        onChangeText={( text ) => { setDoorNumber( text ) }}
                                    />
                                </View>
                                <View style={[styles.inputOuterContainer, { backgroundColor: theme.SecondaryBackground }]}>
                                    <TextInput
                                        placeholder="Near by"
                                        keyboardType="text"
                                        placeholderTextColor={theme.Primary}
                                        fontFamily={FontDirectory.interRegular}
                                        size={14}
                                        color={theme.Primary}
                                        style={styles.input}
                                        value={nearBy}
                                        onChangeText={( text ) => { setNearBy( text ) }}
                                    />
                                </View>
                            </View>



                            <View style={{ marginTop: 12 }}>
                                <CustomText title="State" fontFamily={FontDirectory.PoppinsMedium} fontSize={14} color={theme.Primary} />
                                <View style={[styles.inputOuterContainer, { backgroundColor: theme.SecondaryBackground }]}>
                                    <TextInput
                                        placeholder="State"
                                        keyboardType="text"
                                        placeholderTextColor={theme.Primary}
                                        fontFamily={FontDirectory.interRegular}
                                        size={14}
                                        color={theme.Primary}
                                        style={styles.input}
                                        value={state}
                                        onChangeText={( text ) => { setState( text ) }}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 12 }}>
                                <CustomText title="City" fontFamily={FontDirectory.PoppinsMedium} fontSize={14} color={theme.Primary} />
                                <View style={[styles.inputOuterContainer, { backgroundColor: theme.SecondaryBackground }]}>
                                    <TextInput
                                        placeholder="City"
                                        keyboardType="text"
                                        placeholderTextColor={theme.Primary}
                                        fontFamily={FontDirectory.interRegular}
                                        size={14}
                                        color={theme.Primary}
                                        style={styles.input}
                                        value={city}
                                        onChangeText={( text ) => { setCity( text ) }}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 12 }}>
                                <CustomText title="Zip code" fontFamily={FontDirectory.PoppinsMedium} fontSize={14} color={theme.Primary} />
                                <View style={[styles.inputOuterContainer, { backgroundColor: theme.SecondaryBackground }]}>
                                    <TextInput
                                        placeholder="000000"
                                        keyboardType="phone-pad"
                                        placeholderTextColor={theme.Primary}
                                        fontFamily={FontDirectory.interRegular}
                                        size={14}
                                        style={styles.input}
                                        value={zipCode}
                                        color={theme.Primary}
                                        onChangeText={( text ) => { setZipCode( text ) }}
                                    />
                                </View>
                            </View>

                            <CustomButton fontSize={18} title="Next" dflt
                                onPress={handleNext}
                                style={{
                                    width: windowWidth * 0.88,
                                    marginTop: 24
                                }} />
                        </View>






                        <SkipForNowComponent style={{ flex: 1, marginBottom: 25 }} />
                    </View>
                </ScrollView>




            </SafeAreaView>
        </ImageBackground>
    );
}



export default RegistrationAddress;




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
        flex: 2,
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