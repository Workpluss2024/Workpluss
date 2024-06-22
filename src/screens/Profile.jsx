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





const Profile = () => {
    const theme = useSelector( ( state ) => state.theme?.theme )

    return (
        <View style={[commonStyles.container, { backgroundColor: theme.primary }]}>
            <Text>Profile</Text>
            <CustomButton title="Click" />
        </View>
    );
}

const styles = StyleSheet.create( {


} );

export default Profile;
