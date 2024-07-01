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




const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;

const JOB_LIST = [1, 2, 3, 4]

const Home = () => {
    const theme = useSelector( ( state ) => state.theme?.theme )

    const [selectedOption, setSelectedOption] = useState( 'JOBS' ); // Default selected option

    const [topCardFocusedCardIndex, setTopCardFocusedCardIndex] = useState( 0 )



    const dashboardCardSection = [1, 2]


    const onScroll = useCallback( ( event ) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round( index );
        // console.log( "roundIndex:", roundIndex + " --- " + slideSize + " ---- " + event.nativeEvent.contentOffset.x );
        setTopCardFocusedCardIndex( roundIndex )
    }, [] );

    const TopCard = () => {
        return ( <FlatList
            onScroll={( e ) => onScroll( e )}
            horizontal={true}
            pagingEnabled={true}
            data={JOB_LIST}
            showsHorizontalScrollIndicator={false}
            renderItem={( props ) => <JobPostingComponentTopCard props={props} />}
            keyExtractor={item => item}

        /> )
    }
    const BottomCard = () => {
        return ( <FlatList
            data={JOB_LIST}
            renderItem={( props ) => <JobPostingComponent props={props} />}
            keyExtractor={item => item}
        /> )
    }


    const RenderCards = ( { props } ) => {
        if ( props == 1 ) {
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
                width: windowWidth * 0.94,
                alignSelf: 'center'
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 6, marginVertical: 5 }}>
                    <CustomText title="ALL JOBS" style={{ marginLeft: 4 }} fontFamily={FontDirectory.PoppinsRegular} fontSize={12} color={theme.Primary} />
                    <MaterialCommunityIcons name='view-dashboard' size={14} color={theme.Primary} />
                </View>
                <BottomCard />
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
        padding: 16
    },
    topCardScrollIndicatorContainer: {
        flexDirection: "row",
        alignSelf: 'center'
    }
} );

export default Home;
