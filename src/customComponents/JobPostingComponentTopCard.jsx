import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'





import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import CustomText from './CustomText';
import CustomButton from './CustomButton';
import FontDirectory from '../assets/FontDirectory';




const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;

const JobPostingComponentTopCard = ( props ) => {


    const theme = useSelector( ( state ) => state.theme?.theme )

    return (
        <View style={[styles.card, { backgroundColor: theme?.SecondaryBackground }]}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="clockcircle" size={12} color={theme.Primary} />
                    <CustomText title="8 hrs" fontSize={14} style={{ marginLeft: 4 }} />
                </View>
                <CustomText title="May 22, 2024" color={theme.PrimaryText} fontSize={12} style={{ marginTop: 8 }} fontFamily={FontDirectory.PoppinsMedium} />
            </View>
            <CustomText title="Restaurant Hostess" fontSize={24} fontFamily={FontDirectory.PoppinsMedium} color={theme.Primary} style={{ marginTop: 12 }} />
            <View style={{ alignItems: 'flex-end' }}>
                <CustomText title="₹1600" fontSize={48} fontFamily={FontDirectory.poppinsSemiBold} />
                <CustomText title="200 per hour" fontSize={12} style={{ marginTop: -20 }} fontFamily={FontDirectory.PoppinsLight} />
            </View>
            <CustomButton title="Apply" style={styles.bottomApplyButton} fontSize={18} />

            <View style={styles.locationRow}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome6 name="location-dot" size={12} color={theme.Primary} style={{ marginRight: 4 }} fontFamily={FontDirectory.PoppinsLight} />
                    <CustomText title="10 MTC, Pune, 6058" color={theme.Primary} fontSize={10} />
                </View>
                <CustomText title="More Detail" color={theme.Primary} fontSize={10} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create( {
    card: {
        borderRadius: 8,
        padding: 16,
        marginVertical: 12,
        width: windowWidth * 0.96,
        alignItems: 'center',
        marginHorizontal: 8,
        // elevation: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
        width: windowWidth * 0.8
    },
    time: {
        fontSize: 16,
        marginLeft: 8,
    },
    date: {
        fontSize: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    salary: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
    },
    rate: {
        fontSize: 16,
        marginBottom: 16,
    },
    applyButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 32,
        alignSelf: 'center',
        marginBottom: 16,
    },
    applyButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    location: {
        fontSize: 16,
    },
    detailButton: {
        // Style for 'More Detail' button
    },
    detailButtonText: {
        // Style for text inside 'More Detail' button
    },
    bottomApplyButton: {
        width: windowWidth * 0.4,
        marginTop: 18
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        justifyContent: 'space-between',
        width: windowWidth * 0.8,
        marginTop: 28
    },
} );

export default JobPostingComponentTopCard;
