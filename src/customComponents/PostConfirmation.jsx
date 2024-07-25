/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux'

import commonStyles from '../assets/styles/commonStyles';
import FontDirectory from '../assets/FontDirectory';
import ImageDirectory from '../assets/ImageDirectory';
import CustomText from './CustomText';
import CustomButton from './CustomButton';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;
import { RadioButton } from 'react-native-paper';

const PostConfirmation = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )






    return (
        <Portal style={[styles.portal]}>
            <Modal visible={props?.visible} onDismiss={props?.onDismiss} contentContainerStyle={styles.modalOuterContainer}>
                <ImageBackground
                    source={ImageDirectory.confirmation_modal_background}
                    imageStyle={styles.backgroundImageStyle}
                    style={{
                        width: 270,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >

                    <CustomText title={`You have entered ${ props?.numberOfApplication } different job`} fontFamily={FontDirectory.PoppinsMedium} fontSize={12} style={{ marginTop: 18, textAlign: 'center' }} />

                    <View style={styles.optionContainer}>
                        <RadioButton
                            value="SINGLE"
                            color={theme.Primary}
                            status={props?.postConfirmationSelectedOption == "SINGLE" ? 'checked' : 'unchecked'}
                            onPress={() => props?.setPostConfirmationSelectedOption( "SINGLE" )}
                        />
                        <CustomText title="Single post" size={14} fontFamily={FontDirectory.PoppinsMedium} style={styles.optionText} />
                    </View>

                    <View style={styles.optionContainer}>

                        <RadioButton
                            value="SEPARATE"
                            color={theme.Primary}
                            status={props?.postConfirmationSelectedOption == "SEPARATE" ? 'checked' : 'unchecked'}
                            onPress={() => props?.setPostConfirmationSelectedOption( "SEPARATE" )}
                        />
                        <CustomText title={`${ props?.numberOfApplication } Separate post`} size={14} fontFamily={FontDirectory.PoppinsMedium} style={styles.optionText} />


                        <TouchableOpacity onPress={() => props?.onPreview()}>
                            <CustomText title={"Preview"} size={8} fontFamily={FontDirectory.PoppinsLight} />
                        </TouchableOpacity>
                    </View>


                    <CustomButton title='Proceed' style={{ height: 36, width: 180, marginTop: 6 }} onPress={props?.onDismiss} />

                    <TouchableOpacity style={{ marginTop: 6 }} onPress={props?.onDismiss}>
                        <CustomText title="Cancel" />
                    </TouchableOpacity>

                </ImageBackground>
            </Modal>
        </Portal >
    );
}

const styles = StyleSheet.create( {
    portal: {

    },
    modalOuterContainer: {
        alignSelf: 'center',
        // width: windowWidth * 0.8,
        width: 270,
    },
    buttonDivider: {
        width: 0.5,
    },
    backgroundImageStyle: {

        width: 270,
        height: 185,
        borderRadius: 15
    },
    yesButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 38,
    },
    cancelButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderLeftWidth: 0.5
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 230
    },
    optionText: {
        marginLeft: 16,
        marginRight: 6
    }
} );

export default PostConfirmation;
