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
        <View style={styles.container}>
            <View style={styles.monthDateContainer}>
                <CustomText title={props?.month} fontFamily={FontDirectory.poppinsSemiBold} fontSize={12} />
                <CustomText title={props?.eachActivity?.date} fontFamily={FontDirectory.poppinsSemiBold} fontSize={20} style={styles.dateText} />
            </View>
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
            </View>
        </View>
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
        margin: 10,
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
} );

