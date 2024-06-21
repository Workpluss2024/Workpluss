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
    ImageBackground
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from '../redux/store'
import commonStyles from '../assets/styles/commonStyles';
import CustomButton from '../customComponents/CustomButton';
import CustomText from '../customComponents/CustomText';
import ImageDirectory from '../assets/ImageDirectory';
import SegmentedControl from '../customComponents/SegmentControl';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Home = () => {
    const theme = useSelector((state: RootState) => state.theme?.theme)

    const [selectedOption, setSelectedOption] = useState('JOBS'); // Default selected option


    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <Text>Home</Text>
            <CustomButton title="Click" style={{ marginBottom: 20 }} />

            <SegmentedControl selectedOption={selectedOption} setSelectedOption={setSelectedOption} segment1="JOBS" segment2="STATUS" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

});

export default Home;
