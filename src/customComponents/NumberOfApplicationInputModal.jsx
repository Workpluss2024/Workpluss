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


const NumberOfApplicationInputModal = ( props ) => {
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

                    <CustomText title={'How many applicants can apply for this job?'} fontFamily={FontDirectory.PoppinsMedium} fontSize={14} style={{ marginTop: 18, textAlign: 'center' }} />
                    <View style={[commonStyles.inputOuterContainer, { backgroundColor: theme.MenuNavigatorBottom, width: 50, height: 30 }]}>
                        <TextInput
                            placeholder='10'
                            keyboardType="number-pad"
                            placeholderTextColor={theme.Primary}
                            fontFamily={FontDirectory.interRegular}
                            size={12}
                            style={[commonStyles.input, { color: theme.Primary, marginTop: -4, padding: 0, textAlign: 'center', paddingTop: 6 }]}
                            value={props?.numberOfApplication}
                            onChangeText={( text ) => { props?.setNumberOfApplication( text ) }}
                        />
                    </View>
                    <CustomText title={'Maximum 100'} fontFamily={FontDirectory.PoppinsMedium} fontSize={6} style={{}} />



                    <CustomButton title='Proceed' style={{ height: 36, width: 180, marginTop: 10 }} onPress={props?.onDismiss} />

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
    }
} );

export default NumberOfApplicationInputModal;
