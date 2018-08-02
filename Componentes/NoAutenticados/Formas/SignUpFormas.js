// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = props => (
        <TextInput
            placeholder="Texto desde field nombnre"
            onChangeText={props.input.onChange}
            value={props.input.value}
        />
    );


// create a component
const SignUpFormas = props => (
        <View>
            <Field name="nombre" component={fieldNombre} />
            <Field name="correo" component={fieldNombre} />
            <Field name="password" component={fieldNombre} />
            <Field name="confirmacion" component={fieldNombre} />
            <Text>Redux form</Text>
            <Button
                title="Resgistrar"
                onPress={props.handleSubmit(values => console.log(values))}
            />
        </View>
    );

// make this component available to the app
export default reduxForm({ form: 'SignUpForm' })(SignUpFormas);
