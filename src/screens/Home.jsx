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
    TouchableOpacity,
    FlatList
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




const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;

const JOB_LIST = [1, 2, 3, 4]

const Home = () => {
    const theme = useSelector( ( state ) => state.theme?.theme )

    const [selectedOption, setSelectedOption] = useState( 'JOBS' ); // Default selected option


    return (
        <ImageBackground
            style={commonStyles.container}
            source={ImageDirectory.full_background}
            imageStyle={{ resizeMode: 'stretch', height: windowHeight, width: windowWidth }}
        >
            <View>
                <View style={{ height: windowHeight * 0.47 }}>
                    <FlatList
                        horizontal={true}
                        data={JOB_LIST}
                        renderItem={( props ) => <JobPostingComponentTopCard props={props} />}
                        keyExtractor={item => item}
                    />
                </View>
                <FlatList
                    data={JOB_LIST}
                    renderItem={( props ) => <JobPostingComponent props={props} />}
                    keyExtractor={item => item}
                />
                <View style={{ height: 80 }} />

            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create( {

} );

export default Home;
