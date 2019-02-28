import React, {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import startMainTabs from './../MainTabs/startMainTabs';

export default class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>AuthScreen</Text>
                <Button title="Login" onPress={this.loginHandler}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        margin: 25
    }

});