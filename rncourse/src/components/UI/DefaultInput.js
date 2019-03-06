import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const defaultInput = props => (
    <TextInput
        underlineColorAndroid="transparent"
        {...props}
        style={[styles.input, props.style]}
    />
);

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#eee',
        padding: 15,
        margin: 8
    }
});
export default defaultInput;