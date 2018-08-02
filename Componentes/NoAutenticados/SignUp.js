// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import SignUpFormas from './Formas/SignUpFormas';
// create a component
class SignUp extends Component {
    render() {
        console.log(this.props.numero);
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>SignUp</Text>
                <SignUpFormas />
                <TextInput
                placeholder="Correo@correo.com"
                />
                <Button
                    title="Aumentar"
                    onPress={this.props.aumentar}
                />
                <Button
                    title="SignIn"
                    onPress={() => navigation.goBack()}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

const mapStateToProps = state => ({
        numero: state.reducerPrueba,
    });

const mapDispatchToProps = dispatch => ({
        aumentar: () => {
            dispatch({ type: 'AUMENTAR_REDUCER_PRUEBA' });
        },
    });

// make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
