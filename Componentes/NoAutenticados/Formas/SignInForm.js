// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = props => (
    <View style={styles.textInput}>
        <TextInput
            placeholder={props.ph}
            onChangeText={props.input.onChange}
            value={props.input.value}
            keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
            autoCapitalize="none"
            secureTextEntry={((props.input.name === 'password' || props.input.name === 'confirmacion'))}
            onBlur={props.input.onBlur}
        />
        <View style={styles.linea} />

        {props.meta.touched && props.meta.error && (
            <Text style={styles.errors}>{props.meta.error}</Text>
        )}
    </View>
);

const validate = (value) => {
    const errors = {};
    if (!value.correo) {
        errors.correo = 'requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.correo)) {
        errors.correo = 'Email invalido';
    }
    if (!value.password) {
        errors.password = 'requerido';
    } else if (value.password.length < 5) {
        errors.password = 'Deben ser al menos 5 caracteres';
    } else if (value.password.length > 15) {
        errors.password = 'debe de ser menor de 10 caracteres';
    }
    return errors;
};

// create a component
const SignInForm = props => (
    <View>
        <Field name="correo" component={fieldNombre} ph="correo@correo.com" />
        <Field name="password" component={fieldNombre} ph="*******" />
        <Button
            title="SignIn"
            onPress={props.handleSubmit(values => console.log(values))}
        />
    </View>
);

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    textInput: {
        marginBottom: 16,
    },
    linea: {
        backgroundColor: '#dcdcdc',
        height: 2,
    },
    errors: {
        color: '#ff0000',
    },
});

// make this component available to the app
export default reduxForm({
    form: 'SignInForm',
    validate,
})(SignInForm);
