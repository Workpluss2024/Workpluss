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
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import OnboardingStack from './OnboardingStack';

import Home from '../screens/Home';
import Dashboard from '../screens/Dashboard';
import Schedule from '../screens/Schedule';
import Profile from '../screens/Profile';

import CustomText from '../customComponents/CustomText';

import ImageDirectory from '../assets/ImageDirectory';
import FontDirectory from '../assets/FontDirectory';
import ProfileStack from './ProfileStack';
import HomeStack from './HomeStack';


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
                            {/* {label == "Home" && <Octicons name="home" size={size} color={isFocused ? theme?.Secondary : theme.PrimaryText} />} */}
                            {label == "Home" && <Image source={isFocused ? ImageDirectory.homeImageFocused : ImageDirectory.homeImage} style={{ height: size, width: size, resizeMode: 'contain' }} />}
                            {/* {label == "Dashboard" && <MaterialCommunityIcons name="view-dashboard-outline" size={size} color={isFocused ? theme?.Secondary : theme.PrimaryText} />} */}
                            {label == "Dashboard" && <Image source={isFocused ? ImageDirectory.dashboardImageFocused : ImageDirectory.dashboardImage} style={{ height: size, width: size, resizeMode: 'contain' }} />}
                            {label == "Schedule" && <Image source={isFocused ? ImageDirectory.scheduleImageFocused : ImageDirectory.scheduleImage} style={{ height: size, width: size, resizeMode: 'contain' }} />}
                            {label == "Profile" && <View style={{ padding: 2, backgroundColor: isFocused ? theme?.Secondary : 'transparent', borderRadius: 50 }}>
                                <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png' }} style={[styles.tabBarIcon, styles.tabBarIconProfile]} />
                            </View>}
                            {label != "Profile" && <Text style={{ color: isFocused ? theme?.Secondary : theme.PrimaryText, fontFamily: FontDirectory.PoppinsRegular, letterSpacing: 1, fontSize: 10, marginTop: 2 }}>
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
                component={HomeStack}
            />
            <Tab.Screen
                options={{ headerShown: false }}
                name="Dashboard"
                component={Dashboard}
            />
            <Tab.Screen
                options={{ headerShown: false }}
                name="Schedule"
                component={Schedule}
            />
            <Tab.Screen
                options={{ headerShown: false }}
                name="Profile"
                component={ProfileStack}
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


