/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useCallback } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    TextInput
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { Modal, Portal } from 'react-native-paper';

import commonStyles from '../assets/styles/commonStyles';
import CustomButton from '../customComponents/CustomButton';
import CustomText from '../customComponents/CustomText';
import ImageDirectory from '../assets/ImageDirectory';
import SegmentedControl from '../customComponents/SegmentControl';
import { Ionicons, MaterialIcons, Entypo } from 'react-native-vector-icons';
import JobPostingComponent from '../customComponents/JobPostingComponent';
import JobPostingComponentTopCard from '../customComponents/JobPostingComponentTopCard';
import FontDirectory from '../assets/FontDirectory';
import CustomDots from '../customComponents/CustomDots';

import DatePicker from 'react-native-date-picker'




import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import JobStatusComponent from '../customComponents/JobStatusComponent';
import SegmentControl3 from '../customComponents/SegmentControl3';
import ConfirmationModal from '../customComponents/ConfirmationModal';
import moment from 'moment';
import NumberOfApplicationInputModal from '../customComponents/NumberOfApplicationInputModal';
import PostConfirmation from '../customComponents/PostConfirmation';




const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;

const JOB_LIST = [1, 2, 3, 4]

const PreviewPosts = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )




    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <SafeAreaView style={{ paddingTop: 36 }}>

                <FlatList
                    data={JOB_LIST}
                    renderItem={( props ) => {
                        return (
                            <JobStatusComponent props={props} />
                        )
                    }}
                    keyExtractor={item => item}
                />



                <CustomButton onPress={() => { props?.navigation.goBack() }} title="Cancel" style={{ height: 40, width: 277, alignSelf: 'center', marginTop: 12 }} />
                <View style={{ height: 86 }} />

            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create( {
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 8,
        width: windowWidth,
    },
    topCardScrollIndicatorContainer: {
        flexDirection: "row",
        alignSelf: 'center'
    }
} );

export default PreviewPosts;
