import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomNavigation } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import OnboardingStack from './OnboardingStack';

import Home from '../screens/Home';
import Dashboard from '../screens/Dashboard';
import Activity from '../screens/Activity';
import Profile from '../screens/Profile';

import CustomText from '../customComponents/CustomText';

import ImageDirectory from '../assets/ImageDirectory';
import FontDirectory from '../assets/FontDirectory';



const Tab = createBottomTabNavigator();

export default function HomeBottomTabStack() {
    const theme = useSelector( ( state ) => state.theme?.theme )




    function MyTabBar( { state, descriptors, navigation } ) {
        const size = 24
        return (
            <View style={[styles.bottomTabContainer, { backgroundColor: theme.PrimaryBackground, shadowColor: theme.PrimaryText, }]}>
                {state.routes.map( ( route, index ) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit( {
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        } );

                        if ( !isFocused && !event.defaultPrevented ) {
                            navigation.navigate( route.name, route.params );
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit( {
                            type: 'tabLongPress',
                            target: route.key,
                        } );
                    };

                    return (
                        <TouchableOpacity
                            key={label}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.bottomTabButtons}
                        >
                            {label == "Home" && <Octicons name="home" size={size} color={isFocused ? theme?.Secondary : theme.PrimaryText} />}
                            {label == "Dashboard" && <MaterialCommunityIcons name="view-dashboard-outline" size={size} color={isFocused ? theme?.Secondary : theme.PrimaryText} />}
                            {label == "Activity" && <Fontisto name="search" size={size} color={isFocused ? theme?.Secondary : theme.PrimaryText} />}
                            {label == "Profile" && <View style={{ padding: 2, backgroundColor: isFocused ? theme?.Secondary : 'transparent', borderRadius: 50 }}>
                                <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png' }} style={[styles.tabBarIcon, styles.tabBarIconProfile]} />
                            </View>}
                            {label != "Profile" && <Text style={{ color: isFocused ? theme?.Secondary : theme.PrimaryText, fontFamily: FontDirectory.poppinsSemiBold, fontSize: 10 }}>
                                {label}
                            </Text>}
                        </TouchableOpacity>
                    );
                } )
                }
            </View >
        );
    }




    return (
        <Tab.Navigator
            options={{ headerShown: false }}
            tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
            />
            <Tab.Screen
                name="Activity"
                component={Activity}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create( {
    tabBarIcon: {
        height: 16,
        width: 16,
        resizeMode: 'contain'
    },
    tabBarIconProfile: {
        height: 36,
        width: 36,
        borderRadius: 80
    },
    bottomTabContainer: {
        height: 56,
        marginBottom: 6,
        position: 'absolute',
        bottom: 10,
        borderRadius: 50,
        width: "94%",
        marginLeft: "3%",
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    bottomTabButtons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
} )


