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
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import JobStatusComponent from '../customComponents/JobStatusComponent';
import SegmentControl3 from '../customComponents/SegmentControl3';
import ConfirmationModal from '../customComponents/ConfirmationModal';
import moment from 'moment';
import NumberOfApplicationInputModal from '../customComponents/NumberOfApplicationInputModal';
import PostConfirmation from '../customComponents/PostConfirmation';
import JobApproveComponent from '../customComponents/JobApproveComponent';
import JobApproveExpandedComponent from '../customComponents/JobApproveExpandedComponent';




const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;

const JOB_LIST = [1, 2, 3, 4]

const ApproveJobs = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )

    const [selectedOption, setSelectedOption] = useState( 'STATUS' ); // Default selected option






    const [viewMode, setViewMode] = useState( "TILES" )



















    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <SafeAreaView>

                <View style={styles.headerContainer}>
                    <Image source={ImageDirectory.logo} style={commonStyles.logo} />
                    <SegmentedControl selectedOption={selectedOption} setSelectedOption={setSelectedOption} segment1="JOBS" segment2="STATUS" disabled />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12 }}>
                    <CustomText title="CHOOSE FROM FILTER" fontFamily={FontDirectory.PoppinsMedium} fontSize={14} />
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ marginRight: 6 }}>
                            <Feather name="filter" size={17} color={theme.Primary} />
                        </TouchableOpacity>


                        {viewMode == "TILES" && <TouchableOpacity onPress={() => setViewMode( "GRID" )}>
                            <Feather name="grid" size={17} color={theme.Primary} />
                        </TouchableOpacity>}


                        {viewMode == "GRID" && <TouchableOpacity onPress={() => setViewMode( "TILES" )}>
                            <AntDesign name="bars" size={17} color={theme.Primary} />
                        </TouchableOpacity>}

                    </View>
                </View>
                {viewMode == "TILES" && <View style={{ flex: 1 }}>

                    <FlatList
                        data={JOB_LIST}
                        renderItem={( props ) => {
                            return (
                                <JobApproveComponent props={props} mode={selectedOption} />
                            )
                        }}
                        keyExtractor={item => item}
                    />

                </View>}
                {viewMode == "GRID" && <View style={{ flex: 1 }}>

                    <FlatList
                        data={JOB_LIST}
                        pagingEnabled={true}
                        horizontal={true}
                        renderItem={( props ) => {
                            return (
                                <JobApproveExpandedComponent props={props} mode={selectedOption} />
                            )
                        }}
                        keyExtractor={item => item}
                    />

                </View>}



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

export default ApproveJobs;
