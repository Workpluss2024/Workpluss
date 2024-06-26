import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import { useSelector, useDispatch } from 'react-redux'
import FontDirectory from '../assets/FontDirectory';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;

const JobPostingComponent = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )

    const [isExpanded, setIsExpanded] = useState( false )

    const tagList = ["8 hrs", "Monday", "200 per hour", "10AM - 10PM"]

    return (

        <TouchableOpacity
            onPress={() => { setIsExpanded( true ) }}
            style={[styles.container, { backgroundColor: theme?.SecondaryBackground }]}>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>

                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name="clockcircle" size={12} color={theme.Primary} />
                        <CustomText title="8 hrs" fontSize={10} style={{ marginLeft: 4 }} />
                    </View>
                    <CustomText title="May 22, 2024" color={theme.Error} fontSize={8} style={{ marginTop: 8 }} fontFamily={FontDirectory.PoppinsMedium} />
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <CustomText title="₹1600" fontSize={27} fontFamily={FontDirectory.poppinsSemiBold} />
                    <CustomText title="200 per hour" fontSize={8} style={{ marginTop: -12 }} />
                </View>
            </View>
            <View style={styles.header}>
                {/* <Ionicons name="md-arrow-back" size={24} color="black" /> */}
                <View>
                    <CustomText title="Restaurant Hostess" fontSize={16} fontFamily={FontDirectory.PoppinsMedium} />
                    <View style={styles.locationRow}>
                        <FontAwesome6 name="location-dot" size={12} color={theme.Primary} style={{ marginRight: 4 }} />
                        <CustomText title="10 MTC, Pune, 6058" color={theme.Primary} fontSize={10} />
                        <CustomText title="More Detail" color={theme.Primary} fontSize={10} />
                    </View>
                </View>
                <CustomButton title="Apply" />
            </View>



            {isExpanded && <View style={styles.collapsibleSectionContainer}>

                <View style={styles.actionButtonsContainer}>
                    <TouchableOpacity style={[styles.actionButtonContainer, { backgroundColor: theme.MenuNavigatorBottom }]}>
                        <Ionicons name="chevron-back" size={14} color={theme.PrimaryText} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButtonContainer, { backgroundColor: theme.MenuNavigatorBottom }]}>
                        <FontAwesome name="bookmark-o" size={14} color={theme.PrimaryText} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { setIsExpanded( false ) }}
                        style={[styles.actionButtonContainer, { backgroundColor: theme.MenuNavigatorBottom }]}>
                        <Entypo name="cross" size={14} color={theme.PrimaryText} />
                    </TouchableOpacity>

                </View>

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
                <View style={styles.descriptionSection}>
                    <CustomText title="About" style={styles.sectionTitle} fontFamily={FontDirectory.PoppinsMedium} size={16} />
                    <CustomText title="As a Business Development Executive, you play a pivotal role in our organization's growth and success.  identify and capitalize on new business opportunities, foster partnerships, and enhance our market presence." style={styles.descriptionText} fontFamily={FontDirectory.PoppinsRegular} size={12} />
                </View>
                <CustomButton title="Apply" style={styles.bottomApplyButton} />
            </View>}
        </TouchableOpacity>
    );
};

export default JobPostingComponent;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        padding: 16,
        borderRadius: 12,
        width: windowWidth * 0.94,
        alignSelf: 'center',
        marginVertical: 8
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    applyButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    descriptionSection: {
        marginTop: 18,
        alignItems: 'center'
    },
    sectionTitle: {
        marginBottom: 8,
    },
    descriptionText: {
        textAlign: 'center',
        maxWidth: windowWidth * 0.75
    },
    aboutSection: {
        // Add styles for the "About" section
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        width: "92%",
        justifyContent: 'space-between'
    },
    actionButtonContainer: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        // elevation: 1,
        borderRadius: 8,
        marginTop: 24
    },
    collapsibleSectionContainer: {
        alignItems: 'center'
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
    bottomApplyButton: {
        width: windowWidth * 0.5,
        marginTop: 18
    }
} );

