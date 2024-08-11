import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image

} from 'react-native';
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

const ScheduleTiles = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )

    // { date: 'JUNE 22', time: '08:00 am - 03:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Completed' },

    const tagList = ["8 hrs", "Monday", "200 per hour", "10AM - 10PM"]

    const [tileMode, setTileMode] = useState( "NORMAL" )


    let statusBackgroundColor = theme.MenuNavigatorBottom
    let statusTextColor = theme.PrimaryText
    let tilebackgroundColor = theme.SecondaryBackground
    let fontColor = theme.PrimaryText

    if ( props?.eachActivity?.status == "Approved" ) {
        statusBackgroundColor = theme.Success
        tilebackgroundColor = theme.Primary
        fontColor = theme.Alternate
    }
    if ( props?.eachActivity?.status == "Applied" ) {
        fontColor = theme.Alternate
        tilebackgroundColor = theme.Teritary
    }


    return (
        <TouchableOpacity
            onPress={() => setTileMode( "EXPANDED" )}
            style={styles.container}>
            {/* <CustomText title={JSON.stringify( props )} /> */}


            <View style={styles.monthDateContainer}>
                {props?.index == 0 && <CustomText title={props?.month} fontFamily={FontDirectory.poppinsSemiBold} fontSize={12} />}
                {props?.index == 0 && <CustomText title={props?.eachActivity?.date} fontFamily={FontDirectory.poppinsSemiBold} fontSize={20} style={styles.dateText} />}
            </View>

            {
                tileMode == "REMOVE_CONFIRMATION" ? <View style={[styles.tile, { backgroundColor: theme.ErrorBlur }, styles.confirmationBox]}>
                    <CustomText title={"Remove the shift?"} fontFamily={FontDirectory.PoppinsMedium} fontSize={18} style={{ marginTop: 8 }} />
                    <CustomText title={"can’t remove the shift less than 24 hrs."} fontFamily={FontDirectory.PoppinsLight} fontSize={10} />
                    <CustomText title={"customer care "} fontFamily={FontDirectory.PoppinsLight} fontSize={10} style={{ textDecorationLine: 'underline' }} />
                    <View style={{ marginTop: 4 }}>
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
                </View> :

                    <View style={[styles.tile, { backgroundColor: tilebackgroundColor }]}>
                        <View style={[styles.statusContainer, { backgroundColor: statusBackgroundColor }]}>
                            <CustomText title={props?.eachActivity?.status} fontFamily={FontDirectory.poppinsSemiBold} fontSize={7} color={fontColor} />
                        </View>
                        <View style={styles.content}>
                            <Image source={{ uri: props?.eachActivity?.companyLogo }} style={styles.icon} />
                            <View style={styles.textContainer}>
                                <CustomText title={props?.eachActivity?.time} fontFamily={FontDirectory.poppinsSemiBold} fontSize={16} color={fontColor} />
                                <CustomText title={props?.eachActivity?.description} fontFamily={FontDirectory.PoppinsLight} fontSize={12} color={fontColor} />
                            </View>
                        </View>
                        <View style={styles.locationContainer}>
                            <FontAwesome6 name="location-dot" size={12} color={fontColor} />
                            <CustomText title={props?.eachActivity?.location} fontFamily={FontDirectory.PoppinsLight} fontSize={12} style={styles.location} color={fontColor} />
                        </View>

                        {
                            tileMode == "EXPANDED" && <View style={[styles.collapsibleSectionContainer]}>

                                <View style={styles.actionButtonsContainer}>
                                    <TouchableOpacity style={[styles.actionButtonContainer, { backgroundColor: theme.MenuNavigatorBottom }]}>
                                        <Ionicons name="chevron-back" size={14} color={theme.PrimaryText} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.actionButtonContainer, { backgroundColor: theme.MenuNavigatorBottom }]}>
                                        <FontAwesome name="bookmark-o" size={14} color={theme.PrimaryText} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => { setTileMode( "NORMAL" ) }}
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
                                    <CustomText title="JOB Description" style={styles.sectionTitle} fontFamily={FontDirectory.PoppinsMedium} size={16} />
                                    <CustomText title="As a Business Development Executive, you play a pivotal role in our
                    organization's growth and success by identifying new market
                    opportunities, fostering partnerships, and enhancing brand presence." style={styles.descriptionText} fontFamily={FontDirectory.PoppinsRegular} size={12} />
                                </View>
                                <View style={styles.descriptionSection}>
                                    <CustomText title="About" style={styles.sectionTitle} fontFamily={FontDirectory.PoppinsMedium} size={16} />
                                    <CustomText title="As a Business Development Executive, you play a pivotal role in our organization's growth and success.  identify and capitalize on new business opportunities, foster partnerships, and enhance our market presence." style={styles.descriptionText} fontFamily={FontDirectory.PoppinsRegular} size={12} />
                                </View>



                                <CustomButton
                                    onPress={() => setTileMode( "REMOVE_CONFIRMATION" )}
                                    title="Remove"
                                    style={styles.bottomApplyButton}
                                    textColor={theme.PrimaryText}
                                    backgroundColor={theme.Error} />
                            </View>
                        }

                    </View>
            }

        </TouchableOpacity>
    );
};

export default ScheduleTiles;

const styles = StyleSheet.create( {
    dateText: {
        marginTop: -8
    },
    container: {
        flexDirection: 'row',
        flex: 1,
    },
    monthDateContainer: {
        width: 36,
    },


    tile: {
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        marginTop: 10,
        marginLeft: 4,
        flex: 1
    },
    statusContainer: {
        alignSelf: 'flex-end',
        backgroundColor: 'pink',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingHorizontal: 10
    },
    status: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 38,
        height: 38,
        marginRight: 10,
        borderRadius: 38,
        // resizeMode: 'contain'
    },
    textContainer: {
        flex: 1,
    },
    timeRange: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    jobTitle: {
        fontSize: 14,
        color: '#333',
        marginVertical: 2,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
        marginTop: 8
    },
    location: {
        marginLeft: 5,
    },



    confirmationBox: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    },



    buttonDivider: {
        width: 0.5,
    },
    yesButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // height: 18,
    },
    cancelButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderLeftWidth: 0.5
    },


    collapsibleSectionContainer: {
        alignItems: 'center',
        flex: 1
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
        width: windowWidth * 0.6,
        marginTop: 18,
        height: 36
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
} );

