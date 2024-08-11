import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import FontDirectory from '../assets/FontDirectory';




const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;

const SegmentControl3 = ( props ) => {

    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity
                style={[
                    styles.option,
                    props?.selectedOption === props?.segment1 && styles.selectedOption
                ]}
                onPress={() => props?.setSelectedOption( props?.segment1 )}
            >
                <Text
                    style={[
                        styles.optionText,
                        props?.selectedOption === props?.segment1 && styles.selectedText
                    ]}
                >
                    {props?.segment1}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.option,
                    props?.selectedOption === props?.segment2 && styles.selectedOption
                ]}
                onPress={() => props?.setSelectedOption( props?.segment2 )}
            >
                <Text
                    style={[
                        styles.optionText,
                        props?.selectedOption === props?.segment2 && styles.selectedText
                    ]}
                >
                    {props?.segment2}
                </Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={[
                    styles.option,
                    props?.selectedOption === props?.segment3 && styles.selectedOption
                ]}
                onPress={() => props?.setSelectedOption( props?.segment3 )}
            >
                <Text
                    style={[
                        styles.optionText,
                        props?.selectedOption === props?.segment3 && styles.selectedText
                    ]}
                >
                    {props?.segment3}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: '#412C60',
        overflow: 'hidden',
        height: 50,
        width: windowWidth * 0.9,
        padding: 4
    },
    option: {
        flex: 1,
        // padding: 10
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#412C60', // Unselected background color
    },
    selectedOption: {
        backgroundColor: '#ffffff', // Selected background color
        borderRadius: 50,
        paddingVertical: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    optionText: {
        color: '#ffffff', // Unselected text color
        fontSize: 12,
        fontFamily: FontDirectory.PoppinsMedium
    },
    selectedText: {
        color: '#412C60', // Selected text color
        fontSize: 12,
        fontFamily: FontDirectory.PoppinsMedium
    },
} );

export default SegmentControl3;
