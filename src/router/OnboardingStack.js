import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import SplashScreen from '../screens/onBoarding/SplashScreen';
import LanguageSelect from '../screens/onBoarding/LanguageSelect';
import PasswordChangeConfirmationPage from '../screens/onBoarding/PasswordChangeConfirmationPage';
import PhoneNumberVerifiedConfirmationPage from '../screens/onBoarding/PhoneNumberVerifiedConfirmationPage';
import CreateAnAccount from '../screens/onBoarding/CreateAnAccount';
import ThirdPartyLoginOptions from '../screens/onBoarding/ThirdPartyLoginOptions';
import PhoneEmailInputPage from '../screens/onBoarding/PhoneEmailInputPage';
import RegistrationAddress from '../screens/onBoarding/RegistrationAddress';
import GenderSelect from '../screens/onBoarding/GenderSelect';
import FullNameInput from '../screens/onBoarding/FullNameInput';
import NameConfirmationPage from '../screens/onBoarding/NameConfirmationPage';
import BirthPlaceInput from '../screens/onBoarding/BirthPlaceInput';
import DateOfBirthInput from '../screens/onBoarding/DateOfBirthInput';
import WorkPreference from '../screens/onBoarding/WorkPreference';
import UploadDocuments from '../screens/onBoarding/UploadDocuments';



const Stack = createStackNavigator();

export default function OnboardingStack() {
    return (
        <Stack.Navigator
            initialRouteName='UploadDocuments'
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
            <Stack.Screen name="CreateAnAccount" component={CreateAnAccount} />
            <Stack.Screen name="ThirdPartyLoginOptions" component={ThirdPartyLoginOptions} />
            <Stack.Screen name="PhoneEmailInputPage" component={PhoneEmailInputPage} />
            <Stack.Screen name="RegistrationAddress" component={RegistrationAddress} />
            <Stack.Screen name="GenderSelect" component={GenderSelect} />
            <Stack.Screen name="FullNameInput" component={FullNameInput} />
            <Stack.Screen name="NameConfirmationPage" component={NameConfirmationPage} />
            <Stack.Screen name="BirthPlaceInput" component={BirthPlaceInput} />
            <Stack.Screen name="DateOfBirthInput" component={DateOfBirthInput} />
            <Stack.Screen name="WorkPreference" component={WorkPreference} />
            <Stack.Screen name="UploadDocuments" component={UploadDocuments} />

        </Stack.Navigator>
    );
}