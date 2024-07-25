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
    SafeAreaView
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'

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


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import JobStatusComponent from '../customComponents/JobStatusComponent';
import SegmentControl3 from '../customComponents/SegmentControl3';




const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;

const JOB_LIST = [1, 2, 3, 4]

const JOB_LIST_DATE_WISE = [
    { date: "MAY 22, 2024", jobs: [1, 2] },
    { date: "MAY 23, 2024", jobs: [1, 2] },
    { date: "MAY 24, 2024", jobs: [1, 2] }
]

const Home = ( props ) => {
    const theme = useSelector( ( state ) => state.theme?.theme )

    const [selectedOption, setSelectedOption] = useState( 'JOBS' ); // Default selected option
    const [selectedStatus, setSelectedStatus] = useState( 'ACTIVE' ); // Default selected option

    const [topCardFocusedCardIndex, setTopCardFocusedCardIndex] = useState( 0 )



    const dashboardCardSection = [1, 2]


    const onScroll = useCallback( ( event ) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round( index );
        // console.log( "roundIndex:", roundIndex + " --- " + slideSize + " ---- " + event.nativeEvent.contentOffset.x );
        setTopCardFocusedCardIndex( roundIndex )
    }, [] );



    const handlePostJobs = () => {
        props.navigation.navigate( "PostJobPage" )
    }

    const TopCard = () => {
        return ( <FlatList
            onScroll={( e ) => onScroll( e )}
            horizontal={true}
            pagingEnabled={true}
            data={JOB_LIST}
            showsHorizontalScrollIndicator={false}
            renderItem={( props ) => {

                return (
                    <JobPostingComponentTopCard props={props} />
                )
            }}
            keyExtractor={item => item}

        /> )
    }
    const BottomCard = ( props ) => {
        if ( props?.UPCOMING ) {
            return (
                <View>
                    <FlatList
                        data={JOB_LIST_DATE_WISE}
                        keyExtractor={item => item?.date}
                        renderItem={( { item } ) => {
                            return (
                                <View>
                                    <CustomText title={item.date} fontFamily={FontDirectory.PoppinsRegular} size={12} style={styles.dateTextUnderUpcomingSection} />
                                    <FlatList
                                        data={item?.jobs}
                                        renderItem={( props ) => {
                                            return (
                                                <JobStatusComponent props={props} mode={selectedOption} />
                                            )
                                        }}
                                        keyExtractor={item => item}
                                    />
                                </View>
                            )
                        }}
                    />
                </View>
            )
        }


        return (
            <FlatList
                data={JOB_LIST}
                renderItem={( props ) => {
                    return (
                        <JobStatusComponent props={props} mode={selectedOption} />
                    )
                }}
                keyExtractor={item => item}
            />
        )
    }


    const RenderCards = ( { props } ) => {
        if ( props == 1 ) {
            if ( selectedOption == "JOBS" ) {
                return (

                    <View>
                        <CustomText title="Top Job picks for you" style={{ marginLeft: 24 }} fontFamily={FontDirectory.PoppinsRegular} fontSize={12} color={theme.Primary} />
                        <TopCard />
                        <View style={styles.topCardScrollIndicatorContainer}>
                            {JOB_LIST?.map( ( eachDots, index ) => {
                                return ( <CustomDots selected={index == topCardFocusedCardIndex} key={index} /> )
                            } )}
                        </View>
                    </View>
                )
            }
            return (
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 12
                }}>
                    <TouchableOpacity
                        onPress={() => handlePostJobs()}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 28
                        }}>
                        <FontAwesome name="plus-circle" size={40} color={theme.Primary} />
                        <CustomText title="POST JOB or duplicate" fontSize={14} style={{ marginTop: 12 }} fontFamily={FontDirectory.PoppinsMedium} />
                    </TouchableOpacity>


                    <SegmentControl3 selectedOption={selectedStatus} setSelectedOption={setSelectedStatus} segment1="ACTIVE" segment2="UPCOMING" segment3="HISTORY" />

                </View>
            )
        }
        return (
            <View style={{
                width: windowWidth * 0.94,
                alignSelf: 'center'
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 6, marginVertical: 5 }}>
                    {selectedStatus != "UPCOMING" && <CustomText title={selectedOption == "JOBS" ? "ALL JOBS" : "WAITING FOR APPROVAL"} style={{ marginLeft: 4 }} fontFamily={FontDirectory.PoppinsRegular} fontSize={12} color={theme.Primary} />}
                    {selectedOption == "JOBS" && <MaterialCommunityIcons name='view-dashboard' size={14} color={theme.Primary} />}
                </View>
                <BottomCard UPCOMING={selectedStatus == "UPCOMING"} />
            </View>
        )
    }


    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <SafeAreaView>

                <View style={styles.headerContainer}>
                    <Image source={ImageDirectory.logo} style={commonStyles.logo} />
                    <SegmentedControl selectedOption={selectedOption} setSelectedOption={setSelectedOption} segment1="JOBS" segment2="STATUS" />
                </View>



                <FlatList
                    data={dashboardCardSection}
                    renderItem={( { item } ) => <RenderCards props={item} />}
                    keyExtractor={item => item}
                />
                <View style={{ height: 80 }} />

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
    },
    dateTextUnderUpcomingSection: {
        marginLeft: 4,
        marginBottom: 6,
        marginTop: 2
    }
} );

export default Home;
