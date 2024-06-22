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
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'

import commonStyles from '../assets/styles/commonStyles';
import CustomButton from '../customComponents/CustomButton';
import CustomText from '../customComponents/CustomText.jsx';


import Background from '../assets/svgs/Background';

import SvgUri from 'react-native-svg-uri';

// import svgBackground from '../assets/svgs/back_ground.svg'
// import svgBackgroundXML from '../assets/svgs/temp.xml'



const Dashboard = () => {
    const theme = useSelector( ( state ) => state.theme?.theme )

    return (
        <View style={[commonStyles.container, { backgroundColor: theme.primary }]}>
            <Background />
        </View>
    );
}

const styles = StyleSheet.create( {

} );

export default Dashboard;
