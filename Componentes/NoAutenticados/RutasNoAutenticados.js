import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

console.disableYellowBox = ['Remote bebugger'];

const SignIn = (props) => {
    const { navigation } = props;
    return (
        <View style={{ justifyContent: 'center', flex: 1 }}>
            <Text>Componente SignIn</Text>
            <Button
                title="Navegar a SignUp"
                onPress={() => { navigation.navigate('SignUp'); }}
            />
        </View>);
};

const SignUp = (props) => {
    const { navigation } = props;
    return (
        <View style={{ justifyContent: 'center', flex: 1 }}>
            <Text>Componente SignUp</Text>
            <Button
                title="Navegar a SignIn"
                onPress={() => { navigation.goBack(); }}
            />
        </View>);
};


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
