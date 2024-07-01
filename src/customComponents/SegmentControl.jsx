import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontDirectory from '../assets/FontDirectory';

const SegmentedControl = ( props ) => {

    return (
        <View style={styles.container}>
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
                    JOBS
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
                    STATUS
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
        height: 32,
        width: 120,
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

export default SegmentedControl;
