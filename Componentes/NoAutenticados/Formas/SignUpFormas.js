// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = props => (
    <View>
        <TextInput
            placeholder={props.ph}
            onChangeText={props.input.onChange}
            value={props.input.value}
            keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
            autoCapitalize="none"
            secureTextEntry={((props.input.name === 'password' || props.input.name === 'confirmacion'))}
            // onBlur={props.input.onBlur}
        />
        {props.meta.toucher && props.meta.error && (
            <Text>{props.meta.error}</Text>
        )}
    </View>

);

const validate = (value) => {
    const errors = {};
    if (!value.nombre) {
        errors.nombre = 'requerido';
    } else if (!value.nombre.length < 5) {
        errors.nombre = 'Deben ser al menos 5 caracteres';
    } else if (!value.nombre.length > 10) {
        errors.nombre = 'debe de ser menor de 10 caracteres';
    }

    if (!value.correo) {
        errors.correo = 'requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.correo)) {
        errors.correo = 'Email invalido';
    }

    if (!value.password) {
        errors.password = 'requerido';
    } else if (!value.password.length < 5) {
        errors.password = 'Deben ser al menos 5 caracteres';
    } else if (!value.password.length > 15) {
        errors.password = 'debe de ser menor de 10 caracteres';
    }

    if (!value.confirmacion) {
        errors.confirmacion = 'requerido';
    } else if (!value.confirmacion.length < 5) {
        errors.confirmacion = 'Deben ser al menos 5 caracteres';
    } else if (!value.confirmacion.length > 15) {
        errors.confirmacion = 'debe de ser menor de 10 caracteres';
    }

    if (!value.password === value.confirmacion) {
        errors.confirmacion = 'Las contraseñas deben coincidir';
    }

    return errors;
};

// create a component
const SignUpFormas = props => (
    <View>
        <Field name="nombre" component={fieldNombre} ph="nombre" />
        <Field name="correo" component={fieldNombre} ph="correo@correo.com" />
        <Field name="password" component={fieldNombre} ph="*******" />
        <Field name="confirmacion" component={fieldNombre} ph="*******" />
        <Text>Redux form</Text>
        <Button
            title="Resgistrar"
            onPress={props.handleSubmit(values => console.log(values))}
        />
    </View>
);

// make this component available to the app
export default reduxForm({
    form: 'SignUpForm',
    validate,
})(SignUpFormas);
