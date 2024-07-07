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
import AntDesign from 'react-native-vector-icons/AntDesign'

import { RadioButton } from 'react-native-paper';


import { Searchbar } from 'react-native-paper';
import SkipForNowComponent from '../../customComponents/SkipForNowComponent';
import TopProgressBar from '../../customComponents/TopProgressBar';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const PhoneEmailInputPage = ( props ) => {

    const theme = useSelector( ( state ) => state.theme?.theme )

    const [emailOtpEnabled, setEmailOtpEnabled] = useState( '' )
    const [phoneOtpEnabled, setPhoneOtpEnabled] = useState( '' )

    const [email, setEmail] = useState( '' )
    const [phone, setPhone] = useState( '' )

    const [emailOTP, setEmailOTP] = useState( '' )
    const [phoneOTP, setPhoneOTP] = useState( '' )

    const [emailVerificationStatus, setEmailVerificationStatus] = useState( 'INPUT' ) // INPUT, VERIFIED, WRONG_OTP
    const [phoneVerificationStatus, setPhoneVerificationStatus] = useState( 'INPUT' )


    const handleNext = () => {
        props.navigation.navigate( "RegistrationAddress" )
    }


    const handleSendEmailOTP = () => {
        setEmailOtpEnabled( true )

        // TODO: Trigger the send email OTP
    }
    const handleSendPhoneOTP = () => {
        setPhoneOtpEnabled( true )

        // TODO: Trigger the send phone OTP
    }
    const onChangeEmailInput = ( text ) => {
        if ( emailOtpEnabled ) {
            //Email OTP case
            if ( text.length == 6 ) {
                if ( text == "000000" ) {
                    setEmailVerificationStatus( "VERIFIED" )
                } else {
                    setEmailVerificationStatus( "WRONG_OTP" )
                }
            }
            setEmailOTP( text )
        } else {
            //Email case
            setEmail( text )
        }
    }
    const onChangePhoneInput = ( text ) => {
        if ( phoneOtpEnabled ) {
            //Phone OTP case
            console.log( text )
            if ( text.length == 6 ) {
                if ( text == "000000" ) {
                    setPhoneVerificationStatus( "VERIFIED" )
                } else {
                    setPhoneVerificationStatus( "WRONG_OTP" )
                }
            }
            setPhoneOTP( text )
        } else {
            //Phone case
            setPhone( text )
        }
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
                    <CustomText title="Phone / email" fontFamily={FontDirectory.poppinsBold} color={theme.Primary} fontSize={24} />
                </View>
                <TopProgressBar totalPageCount={10} completedPage={1} />
                <ScrollView style={commonStyles.scrollViewContainer}>

                    <View style={[commonStyles.contentContainer, { minHeight: windowHeight - 65 }]}>

                        {/* <View style={{ flex: 1 }} /> */}

                        <View style={styles.container}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: windowHeight * 0.2,
                                marginBottom: 12
                            }}>
                                {emailVerificationStatus == "VERIFIED" && phoneVerificationStatus == "VERIFIED" && <AntDesign name="checkcircle" color={theme.Success} size={48} style={{ marginRight: 12 }} />}
                                {emailVerificationStatus == "VERIFIED" && phoneVerificationStatus == "VERIFIED" && <CustomText title="Your phone number and email address have been verified" style={{ textAlign: 'center', marginTop: 24 }} fontFamily={FontDirectory.poppinsSemiBold} fontSize={18} color={theme.PrimaryText} />}
                            </View>

                            <View>
                                <CustomText title={emailOtpEnabled ? email : "E-mail"} fontFamily={FontDirectory.PoppinsMedium} fontSize={14} color={theme.Primary} />
                                <View style={[styles.inputOuterContainer, { backgroundColor: theme.SecondaryBackground }]}>
                                    <TextInput
                                        placeholder={emailOtpEnabled ? "XXXXXX" : "xxxx@gmail.com"}
                                        keyboardType={emailOtpEnabled ? "phone-pad" : "email-address"}
                                        placeholderTextColor={theme.Primary}
                                        color={theme.Primary}
                                        fontFamily={FontDirectory.interRegular}
                                        size={14}
                                        onChangeText={( text ) => onChangeEmailInput( text )}
                                        value={emailOtpEnabled ? emailOTP : email}
                                        style={styles.input}
                                    />
                                    {emailVerificationStatus == "INPUT" && <TouchableOpacity
                                        mode="contained"
                                        onPress={() => handleSendEmailOTP()}
                                        style={[styles.button, { backgroundColor: theme.Primary }]}>
                                        <CustomText title="Send OTP" fontFamily={FontDirectory.PoppinsMedium} fontSize={12} color={theme.Accent4} />
                                    </TouchableOpacity>}
                                    {emailVerificationStatus == "WRONG_OTP" && <View
                                        mode="contained"
                                        style={[styles.button, { backgroundColor: theme.Error }]}>
                                        <CustomText title="Wrong OTP" fontFamily={FontDirectory.PoppinsMedium} fontSize={12} color={theme.PrimaryBackground} />
                                    </View>}
                                    {emailVerificationStatus == "VERIFIED" &&
                                        <AntDesign name="checkcircle" color={theme.Success} size={24} style={{ marginRight: 12 }} />
                                    }
                                </View>
                            </View>



                            <View style={{ marginTop: 24 }}>
                                <CustomText title="Phone Number" fontFamily={FontDirectory.PoppinsMedium} fontSize={14} color={theme.Primary} />
                                <View style={[styles.inputOuterContainer, { backgroundColor: theme.SecondaryBackground }]}>
                                    <TextInput
                                        placeholder={phoneOtpEnabled ? "XXXXXX" : "+91 XXXXXXXXXX"}
                                        keyboardType={"phone-pad"}
                                        placeholderTextColor={theme.Primary}
                                        color={theme.Primary}
                                        fontFamily={FontDirectory.interRegular}
                                        onChangeText={( text ) => onChangePhoneInput( text )}
                                        value={phoneOtpEnabled ? phoneOTP : phone}
                                        size={14}
                                        style={styles.input}
                                    />

                                    {phoneVerificationStatus == "INPUT" && <TouchableOpacity
                                        mode="contained"
                                        onPress={() => handleSendPhoneOTP()}
                                        style={[styles.button, { backgroundColor: theme.Primary }]}>
                                        <CustomText title="Send OTP" fontFamily={FontDirectory.PoppinsMedium} fontSize={12} color={theme.Accent4} />
                                    </TouchableOpacity>}
                                    {phoneVerificationStatus == "WRONG_OTP" && <View
                                        mode="contained"
                                        style={[styles.button, { backgroundColor: theme.Error }]}>
                                        <CustomText title="Wrong OTP" fontFamily={FontDirectory.PoppinsMedium} fontSize={12} color={theme.PrimaryBackground} />
                                    </View>}
                                    {phoneVerificationStatus == "VERIFIED" &&
                                        <AntDesign name="checkcircle" color={theme.Success} size={24} style={{ marginRight: 12 }} />
                                    }
                                </View>
                            </View>

                            {( emailVerificationStatus != "VERIFIED" || phoneVerificationStatus != "VERIFIED" ) && <CustomText title="Please ensure that you have used the email address   associated with your Aadhaar card."
                                fontSize={10}
                                color={theme.Primary}
                                style={{
                                    textAlign: 'center',
                                    marginTop: 24

                                }}
                            />}
                        </View>
                        {( emailVerificationStatus != "VERIFIED" || phoneVerificationStatus != "VERIFIED" ) && <SkipForNowComponent style={{ flex: 1 }} onSkip={() => handleNext()} />}
                        {( emailVerificationStatus == "VERIFIED" && phoneVerificationStatus == "VERIFIED" ) && <View style={{ flex: 1, width: windowWidth * 0.8 }}>
                            <CustomText title="By creating an account or signing you agree"
                                fontSize={12}
                                fontFamily={FontDirectory.interMixed}
                                color={theme.Primary}
                                style={{
                                    textAlign: 'center',
                                }}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                                <CustomText title="to our "
                                    fontSize={12}
                                    color={theme.Primary}
                                    fontFamily={FontDirectory.interMixed}
                                    style={{
                                        textAlign: 'center',
                                    }}
                                />
                                <TouchableOpacity>
                                    <CustomText title="Terms and Conditions"
                                        fontSize={12}
                                        color={theme.Primary}
                                        fontFamily={FontDirectory.interSemiBold}
                                        style={{
                                            textAlign: 'center',
                                            textDecorationLine: 'underline'
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <CustomButton title="Next" onPress={() => handleNext()} dflt fontSize={16} fontFamily={FontDirectory.interSemiBold} style={{ marginTop: 12 }} />
                        </View>}
                    </View>
                </ScrollView>




            </SafeAreaView>
        </ImageBackground>
    );
}



export default PhoneEmailInputPage;




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