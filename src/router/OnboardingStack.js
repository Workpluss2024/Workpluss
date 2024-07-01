import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import SplashScreen from '../screens/onBoarding/SplashScreen';
import LanguageSelect from '../screens/onBoarding/LanguageSelect';
import PasswordChangeConfirmationPage from '../screens/onBoarding/PasswordChangeConfirmationPage';
import PhoneNumberVerifiedConfirmationPage from '../screens/onBoarding/PhoneNumberVerifiedConfirmationPage';



const Stack = createStackNavigator();

export default function OnboardingStack() {
    return (
        <Stack.Navigator
            initialRouteName='PhoneNumberVerifiedConfirmationPage'
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

            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LanguageSelect" component={LanguageSelect} />
            <Stack.Screen name="PasswordChangeConfirmationPage" component={PasswordChangeConfirmationPage} />
            <Stack.Screen name="PhoneNumberVerifiedConfirmationPage" component={PhoneNumberVerifiedConfirmationPage} />

        </Stack.Navigator>
    );
}