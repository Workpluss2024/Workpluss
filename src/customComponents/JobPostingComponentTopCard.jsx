import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import FlipCard from 'react-native-flip-card'





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

    const tagList = ["8 hrs", "Monday", "200 per hour", "10AM - 10PM"]

    return (
        <FlipCard
            style={{ height: windowHeight * 0.47 }}
            friction={6}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}
            onFlipEnd={( isFlipEnd ) => { console.log( 'isFlipEnd', isFlipEnd ) }}
        >
            {/* Face Side */}
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
                <CustomButton title="Apply" style={styles.bottomApplyButton} fontSize={18} fontFamily={FontDirectory.poppinsSemiBold} />

                <View style={styles.locationRow}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome6 name="location-dot" size={12} color={theme.Primary} style={{ marginRight: 4 }} fontFamily={FontDirectory.PoppinsLight} />
                        <CustomText title="10 MTC, Pune, 6058" color={theme.Primary} fontSize={10} />
                    </View>
                    <CustomText title="More Detail" color={theme.Primary} fontSize={10} />
                </View>
            </View>



            {/* Back Side */}
            <View style={[styles.card, { backgroundColor: theme?.SecondaryBackground }]}>
                <View style={styles.tagsContainer}>
                    {tagList?.map( ( eachTag ) => {
                        return (
                            <View
                                style={[styles.eachTagContainer, { backgroundColor: theme.MenuNavigatorBottom }]}
                                key={eachTag}>
                                <CustomText title={eachTag} fontFamily={FontDirectory.PoppinsLight} fontSize={14} />
                            </View>
                        )
                    } )
                    }
                </View>

                <View style={styles.descriptionSection}>
                    <CustomText title="JOB DESCRIPTION" style={styles.sectionTitle} fontFamily={FontDirectory.PoppinsMedium} size={16} />
                    <CustomText title="As a Business Development Executive, you play a pivotal role in our
                    organization's growth and success by identifying new market
                    opportunities, fostering partnerships, and enhancing brand presence." style={styles.descriptionText} fontFamily={FontDirectory.PoppinsRegular} size={12} />
                </View>
                <CustomButton title="Apply" style={[styles.bottomApplyButton, { marginBottom: 24 }]} fontFamily={FontDirectory.poppinsSemiBold} fontSize={18} />
            </View>
        </FlipCard>
    );
};

const styles = StyleSheet.create( {
    card: {
        borderRadius: 8,
        padding: 16,
        marginVertical: 12,
        width: windowWidth * 0.94,
        alignItems: 'center',
        marginHorizontal: windowWidth * 0.03,
        height: windowHeight * 0.43,
        elevation: 5,
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
        marginTop: 20
    },




    tagsContainer: {
        flexDirection: 'row',
        maxWidth: windowWidth * 0.8,
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 14
    },
    eachTagContainer: {
        marginHorizontal: 4,
        borderRadius: 100,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 2,
    },
    descriptionSection: {
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 12
    },
    sectionTitle: {
        marginBottom: 8,
    },
    descriptionText: {
        textAlign: 'center',
        maxWidth: windowWidth * 0.75
    },
} );

export default JobPostingComponentTopCard;
