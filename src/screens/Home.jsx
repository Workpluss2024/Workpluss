/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ImageBackground,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'

import commonStyles from '../assets/styles/commonStyles';
import CustomButton from '../customComponents/CustomButton';
import CustomText from '../customComponents/CustomText';
import ImageDirectory from '../assets/ImageDirectory';
import SegmentedControl from '../customComponents/SegmentControl';
import { Ionicons, MaterialIcons, Entypo } from 'react-native-vector-icons';
import JobPostingComponent from '../customComponents/JobPostingComponent';




const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const Home = () => {
    const theme = useSelector( ( state ) => state.theme?.theme )

    const [selectedOption, setSelectedOption] = useState( 'JOBS' ); // Default selected option


    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <ScrollView style={{ flex: 1 }}>
                <JobPostingComponent />

            </ScrollView>


        </ImageBackground>
    );
}

const styles = StyleSheet.create( {

} );

export default Home;
