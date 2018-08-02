import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';


console.disableYellowBox = ['Remote bebugger'];


    const RutasNoAutenticadas = createStackNavigator({
        SignIn: {
            screen: SignIn,
            // navigationOptions: {
            //     header: null,
            // },
        },
        SignUp: {
            screen: SignUp,
            // navigationOptions: {
            //     title: 'SignUp',
            // },
        },

    },
    {
        headerMode: 'none',
    });
    // {
    //     navigationOptions: {
    //         title: 'Titulo desde el SN',
    //     },
    //

    export { RutasNoAutenticadas };
