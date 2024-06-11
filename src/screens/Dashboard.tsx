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

import type { RootState } from '../redux/store'
import commonStyles from '../assets/styles/commonStyles';
import CustomButton from '../customComponents/CustomButton';
import CustomText from '../customComponents/CustomText';





const Dashboard = () => {
    const theme = useSelector((state: RootState) => state.theme?.theme)

    return (
        <View style={[commonStyles.container, { backgroundColor: theme.primary }]}>
            <Text>Dashboard</Text>
            <CustomText title={JSON.stringify(theme)} />
            <CustomButton title="Click" />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Dashboard;
