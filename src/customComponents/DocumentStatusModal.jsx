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
    TouchableOpacity
} from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux'

import commonStyles from '../assets/styles/commonStyles';
import FontDirectory from '../assets/FontDirectory';
import ImageDirectory from '../assets/ImageDirectory';
import CustomText from './CustomText';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const DocumentStatusModal = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )






    return (
        <Portal style={styles.portal}>
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

                    <CustomText title={props?.heading} fontFamily={FontDirectory.PoppinsMedium} fontSize={18} style={{ marginTop: 18 }} />
                    <CustomText title={props?.description} fontFamily={FontDirectory.PoppinsLight} fontSize={12} />
                    <View style={{ marginTop: 16 }}>
                        <View style={{ backgroundColor: theme.Primary, height: 0.5, width: 270 }} />
                        <View style={[styles.actionButtonsContainer, {}]}>
                            <TouchableOpacity
                                onPress={props?.onDismiss}
                                style={styles.yesButton}>
                                <CustomText title={props?.yesText?.length > 0 ? props?.yesText : "Yes"} fontFamily={FontDirectory.PoppinsRegular} fontSize={17} />
                            </TouchableOpacity >
                            <View style={[styles.buttonDivider, { backgroundColor: theme.Primary }]} />

                            <TouchableOpacity style={styles.cancelButton} onPress={props?.onDismiss}>
                                <CustomText title={props?.cancelText?.length > 0 ? props?.cancelText : "Cancel"} fontFamily={FontDirectory.PoppinsRegular} fontSize={17} />
                            </TouchableOpacity>
                        </View>
                    </View>
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
        height: 123
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

export default DocumentStatusModal;
