import React, {Component} from 'react';
import { Button, Dimentions, View, Text, StyleSheet, TextInput } from 'react-native';
import startMainTabs from './../MainTabs/startMainTabs';
import DefaultInput from './../../components/UI/DefaultInput';

export default class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>AuthScreen</Text>
                <Button title="Sign Up" />
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="Your Email-Address" style={styles.input} />
                    <DefaultInput placeholder="Password" style={styles.input} />
                    <DefaultInput placeholder="Password confirmation" style={styles.input} />
                </View>
                <Button title="Submit" onPress={this.loginHandler}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        borderColor: "#ff0000",
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
    },

    inputContainer: {
        width: "80%"
    },

    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    }

});