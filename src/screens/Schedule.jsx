/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    SafeAreaView,

    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'


import commonStyles from '../assets/styles/commonStyles.js';
import CustomButton from '../customComponents/CustomButton.jsx';
import CustomText from '../customComponents/CustomText.jsx';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ScheduleTiles from '../customComponents/ScheduleTiles';
import FontDirectory from '../assets/FontDirectory.js';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const Schedule = () => {
    const theme = useSelector( ( state ) => state.theme?.theme )


    const activities = [
        {
            id: 1,
            year: 2024,
            month: "JUNE",
            activityList: [
                { date: '18', time: '08:00 am - 03:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Completed', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
                { date: '22', time: '08:00 am - 03:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Completed', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
                { date: '30', time: '08:00 am - 03:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Completed', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
                { date: '06', time: '09:00 pm - 11:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Applied', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
                { date: '10', time: '08:00 am - 03:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Approved', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
            ]
        },
        {
            id: 2,
            year: 2024,
            month: "JUL",
            activityList: [
                { date: '18', time: '08:00 am - 03:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Completed', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
                { date: '22', time: '08:00 am - 03:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Completed', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
                { date: '30', time: '08:00 am - 03:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Completed', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
                { date: '06', time: '09:00 pm - 11:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Applied', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
                { date: '10', time: '08:00 am - 03:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Approved', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
            ]
        },
        {
            id: 3,
            year: 2024,
            month: "Aug",
            activityList: [
                { date: '18', time: '08:00 am - 03:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Completed', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
                { date: '22', time: '08:00 am - 03:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Completed', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
                { date: '30', time: '08:00 am - 03:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Completed', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
                { date: '06', time: '09:00 pm - 11:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Applied', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
                { date: '10', time: '08:00 am - 03:00 pm', description: 'Restaurant helper', location: 'MIDC, Pune, 89456', status: 'Approved', companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVrLS-bohhndriu8wQKb3g0z810HJ34sPA&s" },
            ]
        }
    ];




    const RenderMonth = ( { item } ) => {
        let month = item.month
        return (
            <View style={styles.item}>
                <CustomText title={item.month} style={styles.monthName} fontFamily={FontDirectory.poppinsBold} fontSize={12} />
                <FlatList
                    data={item?.activityList}
                    renderItem={( { item } ) => <ScheduleTiles eachActivity={item} month={month} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    };





    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <SafeAreaView style={styles.container}>

                <View style={styles.header}>
                    <CustomText title="ACTIVITY" fontFamily={FontDirectory.PoppinsMedium} fontSize={14} />
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Feather name="filter" size={17} color={theme.Primary} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 12 }}>
                            <AntDesign name="calendar" size={17} color={theme.Primary} />
                        </TouchableOpacity>
                    </View>
                </View>



                <FlatList
                    data={activities}
                    renderItem={( { item } ) => <RenderMonth item={item} />}
                    keyExtractor={item => item.id}
                />

            </SafeAreaView>
        </ImageBackground>
    );
}

export default Schedule;





const styles = StyleSheet.create( {
    container: {
        flex: 1,
        width: windowWidth,
        paddingHorizontal: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20
    },
    monthName: {
        marginLeft: 42
    }
} );
