import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import { useSelector, useDispatch } from 'react-redux'
import FontDirectory from '../assets/FontDirectory';



const JobPostingComponent = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )

    return (

        <View style={[styles.container, { backgroundColor: theme?.SecondaryBackground }]}>
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
                    <CustomText title="200 per hour" fontSize={10} style={{ marginTop: -12 }} />
                </View>
            </View>
            <View style={styles.header}>
                {/* <Ionicons name="md-arrow-back" size={24} color="black" /> */}

                <CustomText title="Restaurant Hostess" style={styles.title} />
                <CustomButton title="Apply" />
            </View>
            <View style={styles.locationRow}>
                <FontAwesome6 name="location-dot" size={12} color={theme.Primary} style={{ marginRight: 4 }} />
                <CustomText title="10 MTC, Pune, 6058" color={theme.Primary} fontSize={10} />
                <TouchableOpacity onPress={() => { }} style={{ marginLeft: 10 }}>
                    <CustomText title="More Detail" color={theme.Primary} fontSize={10} />
                </TouchableOpacity>
            </View>
            <View style={styles.detailsRow}>
                <Ionicons name="md-time" size={24} color="black" />
                <CustomText title="8 hrs" />
                <MaterialIcons name="date-range" size={24} color="black" />
                <CustomText title="Monday" />
                <MaterialIcons name="attach-money" size={24} color="black" />
                <CustomText title="200 per day" />
                <Entypo name="cross" size={24} color="black" />
            </View>
            <View style={styles.descriptionSection}>
                <CustomText title="JOB DESCRIPTION" style={styles.sectionTitle} />
                <CustomText title="As a Business Development Executive, you play a pivotal role in our
                    organization's growth and success by identifying new market
                    opportunities, fostering partnerships, and enhancing brand presence." style={styles.descriptionText} />
            </View>
            <View style={styles.aboutSection}>
                <CustomText title="About" style={styles.sectionTitle} />

            </View>
            <CustomButton title="Apply" />
        </View >
    );
};

export default JobPostingComponent;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        padding: 16,
        borderRadius: 12,
        marginVertical: 12,
        marginHorizontal: 8 
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    applyButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    descriptionSection: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    descriptionText: {
        fontSize: 14,
    },
    aboutSection: {
        // Add styles for the "About" section
    },
} );

