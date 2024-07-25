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

const PostJobPage = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )

    const [selectedOption, setSelectedOption] = useState( 'STATUS' ); // Default selected option
    const [selectedStatus, setSelectedStatus] = useState( 'ACTIVE' ); // Default selected option




    const [work, setWork] = useState( '' )
    const [location, setLocation] = useState( '' )
    const [perHourCost, setPerHourCost] = useState( null )
    const [noOfPeople, setNoOfPeople] = useState( null )
    const [restaurantsWork, setRestaurantsWork] = useState( '' )
    const [numberOfApplication, setNumberOfApplication] = useState( 10 )

    const [jobDateTime, setJobDateTime] = useState( new Date() );
    const [open, setOpen] = useState( false )


    const [modalVisible, setModalVisible] = React.useState( false );
    const [modalVisiblePostConfirmation, setModalVisiblePostConfirmation] = React.useState( false );


    const [postConfirmationSelectedOption, setPostConfirmationSelectedOption] = useState( "SINGLE" )







    const handlePreviewPost = () => {
        setModalVisiblePostConfirmation( false )
        props.navigation.navigate( "PreviewPosts" )
    }








    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <SafeAreaView>

                <ScrollView>

                    <View style={styles.headerContainer}>
                        <Image source={ImageDirectory.logo} style={commonStyles.logo} />
                        <SegmentedControl selectedOption={selectedOption} setSelectedOption={setSelectedOption} segment1="JOBS" segment2="STATUS" disabled />
                    </View>


                    <View style={{
                        flex: 1,
                        backgroundColor: theme.SecondaryBackground,
                        width: windowWidth * 0.94,
                        marginLeft: windowWidth * 0.03,
                        borderRadius: 10,
                        paddingHorizontal: 12
                    }}>

                        <CustomText title={"Post Job"} fontFamily={FontDirectory.robotoExtraBold} fontSize={24} color={theme.Text1} style={{
                            // marginLeft: windowWidth * 0.03,
                            marginTop: 20
                        }} />

                        <CustomText title={"Total amount - 1600 | 150 per hour | Total hours 16 hrs"} fontFamily={FontDirectory.robotoExtraBold}
                            fontSize={11} color={theme.Text1} style={{
                                // marginLeft: windowWidth * 0.031
                            }} />


                        <CustomText title={"Work"} fontFamily={FontDirectory.robotoMedium} fontSize={14} color={theme.Text1} style={commonStyles.inputHeader} />
                        <View style={[commonStyles.inputOuterContainer, { backgroundColor: theme.MenuNavigatorBottom }]}>
                            <TextInput
                                placeholder="Restaurants work"
                                keyboardType="text"
                                placeholderTextColor={theme.Primary}
                                fontFamily={FontDirectory.interRegular}
                                size={14}
                                style={commonStyles.input}
                                value={work}
                                onChangeText={( text ) => { setWork( text ) }}
                            />
                        </View>


                        <CustomText title={"Location"} fontFamily={FontDirectory.robotoMedium} fontSize={14} color={theme.Text1} style={commonStyles.inputHeader} />
                        <View style={[commonStyles.inputOuterContainer, { backgroundColor: theme.MenuNavigatorBottom }]}>
                            <TextInput
                                placeholder="Berlin"
                                keyboardType="text"
                                placeholderTextColor={theme.Primary}
                                fontFamily={FontDirectory.interRegular}
                                size={14}
                                style={commonStyles.input}
                                value={location}
                                onChangeText={( text ) => { setLocation( text ) }}
                            />
                        </View>



                        <CustomText title={"Per hour cost"} fontFamily={FontDirectory.robotoMedium} fontSize={14} color={theme.Text1} style={commonStyles.inputHeader} />
                        <View style={[commonStyles.inputOuterContainer, { backgroundColor: theme.MenuNavigatorBottom }]}>
                            <TextInput
                                placeholder="150 INR"
                                keyboardType="number-pad"
                                placeholderTextColor={theme.Primary}
                                fontFamily={FontDirectory.interRegular}
                                size={14}
                                style={commonStyles.input}
                                value={perHourCost}
                                onChangeText={( text ) => { setPerHourCost( text ) }}
                            />
                        </View>



                        <CustomText title={"No of people"} fontFamily={FontDirectory.robotoMedium} fontSize={14} color={theme.Text1} style={commonStyles.inputHeader} />
                        <View style={[commonStyles.inputOuterContainer, { backgroundColor: theme.MenuNavigatorBottom }]}>
                            <TextInput
                                placeholder="10"
                                keyboardType="number-pad"
                                placeholderTextColor={theme.Primary}
                                fontFamily={FontDirectory.interRegular}
                                size={14}
                                style={commonStyles.input}
                                value={noOfPeople}
                                onChangeText={( text ) => { setNoOfPeople( text ) }}
                            />
                        </View>


                        <CustomText title={"Job type"} fontFamily={FontDirectory.robotoMedium} fontSize={14} color={theme.Text1} style={commonStyles.inputHeader} />
                        <View style={[commonStyles.inputOuterContainer, { backgroundColor: theme.MenuNavigatorBottom }]}>
                            <TextInput
                                placeholder="Restaurants work"
                                keyboardType="text"
                                placeholderTextColor={theme.Primary}
                                fontFamily={FontDirectory.interRegular}
                                size={14}
                                style={commonStyles.input}
                                value={noOfPeople}
                                onChangeText={( text ) => { setNoOfPeople( text ) }}
                            />
                        </View>
                        <CustomText title={"Select date and time"} fontFamily={FontDirectory.robotoMedium} fontSize={14} color={theme.Text1} style={commonStyles.inputHeader} />
                        <View style={[commonStyles.inputOuterContainer, { backgroundColor: theme.MenuNavigatorBottom }]}>
                            <TouchableOpacity
                                onPress={() => setOpen( true )}
                                style={[styles.inputOuterContainer, { backgroundColor: theme.SecondaryBackground }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesome name="calendar" size={14} color={theme.Primary} />
                                    <CustomText title={moment( jobDateTime ).format( "  ddd  DD/MM  " )} color={theme.Primary} fontFamily={FontDirectory.interRegular} fontSize={14} />
                                    <Feather name="clock" size={14} color={theme.Primary} />
                                    <CustomText title={moment( jobDateTime ).format( "  hh:mm a  " )} color={theme.Primary} fontFamily={FontDirectory.interRegular} fontSize={14} />
                                </View>
                            </TouchableOpacity>
                        </View>



                        <CustomButton title="Create" style={{ height: 40, marginTop: 20 }} onPress={() => setModalVisible( true )} />
                        <DatePicker
                            modal
                            mode="datetime"
                            open={open}
                            date={jobDateTime}
                            onConfirm={( date ) => {
                                setOpen( false )
                                setJobDateTime( date )
                            }}
                            onCancel={() => {
                                setOpen( false )
                            }}
                        />





                    </View>


                    <NumberOfApplicationInputModal
                        visible={modalVisible}
                        yesText="Yes"
                        cancelText="Cancel"
                        numberOfApplication={numberOfApplication}
                        setNumberOfApplication={setNumberOfApplication}
                        onDismiss={() => {
                            setModalVisible( false )
                            setModalVisiblePostConfirmation( true )
                        }} />



                    <PostConfirmation
                        numberOfApplication={numberOfApplication}

                        visible={modalVisiblePostConfirmation}
                        yesText="Yes"
                        postConfirmationSelectedOption={postConfirmationSelectedOption}
                        setPostConfirmationSelectedOption={setPostConfirmationSelectedOption}
                        cancelText="Cancel"
                        setNumberOfApplication={setNumberOfApplication}
                        onPreview={handlePreviewPost}
                        onDismiss={() => setModalVisiblePostConfirmation( false )} />





                    <View style={{ height: 80 }} />
                </ScrollView>

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

export default PostJobPage;
