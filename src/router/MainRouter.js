import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingStack from './OnboardingStack';
import Dashboard from '../screens/Dashboard';
import HomeBottomTabStack from './HomeBottomTabStack';

const Stack = createNativeStackNavigator();

export default function MainRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='OnboardingStack'
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
                <Stack.Screen
                    name="HomeBottomTabStack"
                    component={HomeBottomTabStack}
                />
                <Stack.Screen
                    name="OnboardingStack"
                    component={OnboardingStack}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}