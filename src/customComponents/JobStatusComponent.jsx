import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
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
import commonStyles from '../assets/styles/commonStyles';


const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;

const JobStatusComponent = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )

    const [isExpanded, setIsExpanded] = useState( false )

    const tagList = ["8 hrs", "Monday", "200 per hour", "10AM - 10PM"]

    const profilePicList = [
        "data:image/jpeg;base64,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",
        "data:image/jpeg;base64,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",
        "data:image/jpeg;base64,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"
    ]



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
                    <View style={[commonStyles.rowSpaceBetween, { width: windowWidth * 0.86 }]}>
                        {props?.mode == "JOBS" ? <View style={styles.locationRow}>
                            <FontAwesome6 name="location-dot" size={12} color={theme.Primary} style={{ marginRight: 4 }} />
                            <CustomText title="10 MTC, Pune, 6058" color={theme.Primary} fontSize={10} />
                            <CustomText title=" More Detail" color={theme.Primary} fontSize={10} />
                        </View> :
                            <View style={styles.locationRow}>
                                <View style={styles.avatarsContainer}>
                                    {profilePicList?.map( ( eachPic, index ) => {
                                        return (
                                            <Image key={index} source={{ uri: eachPic }} style={styles.profileAvatar} />
                                        )
                                    } )}
                                </View>
                                <CustomText title="130 Applied" color={theme.Primary} fontSize={10} />
                                <CustomText title=" More Detail" color={theme.Primary} fontSize={10} />
                            </View>
                        }
                        <CustomButton title={props?.mode == "JOBS" ? "Apply" : "Approve"} cardButton onPress={props?.handleApprove} />
                    </View>
                </View>
            </View>



            {
                isExpanded && <View style={styles.collapsibleSectionContainer}>

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
                    <CustomButton title={props?.mode == "JOBS" ? "Apply" : "Approve"} onPress={props?.handleApprove} style={styles.bottomApplyButton} />
                </View>
            }
        </TouchableOpacity >
    );
};

export default JobStatusComponent;

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
    },
    avatarsContainer: {
        flexDirection: 'row',
        paddingLeft: 12,
        marginRight: 12
    },
    profileAvatar: {
        height: 22,
        width: 22,
        borderRadius: 22,
        marginLeft: -9
    }
} );

