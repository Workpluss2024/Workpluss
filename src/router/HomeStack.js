import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import MainProfilePage from '../screens/profile/MainProfilePage';
import PersonalInformation from '../screens/profile/PersonalInformation';
import UploadDocuments from '../screens/onBoarding/UploadDocuments';
import Home from '../screens/Home';
import PostJobPage from '../screens/PostJobPage';
import PreviewPosts from '../screens/PreviewPosts';




const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName='MainHome'
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: ( { current, next, layouts } ) => ( {
                    cardStyle: {
                        transform: [
                            {
                                translateX: current.progress.interpolate( {
                                    inputRange: [0, 1],
                                    outputRange: [layouts.screen.width, 0],
                                } ),
                            },
                            {
                                translateX: next
                                    ? next.progress.interpolate( {
                                        inputRange: [0, 1],
                                        outputRange: [0, -layouts.screen.width],
                                    } )
                                    : 1,
                            },
                        ],
                    },
                    overlayStyle: {
                        opacity: current.progress.interpolate( {
                            inputRange: [0, 1],
                            outputRange: [0, 0.5],
                        } ),
                    },
                } ),
                transitionSpec: {
                    open: { animation: 'timing', config: { duration: 400 } }, // Adjust duration here
                    close: { animation: 'timing', config: { duration: 400 } }, // Adjust duration here
                },
            }}
        >

            <Stack.Screen name="MainHome" component={Home} />
            <Stack.Screen name="PostJobPage" component={PostJobPage} />
            <Stack.Screen name="PreviewPosts" component={PreviewPosts} />



        </Stack.Navigator>
    );
}