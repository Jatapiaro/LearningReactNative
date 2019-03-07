import React, {Component} from 'react';
import { Button, View, StyleSheet, ImageBackground } from 'react-native';
import startMainTabs from './../MainTabs/startMainTabs';
import DefaultInput from './../../components/UI/DefaultInput';
import HeadingText from './../../components/UI/HeadingText';
import MainText from './../../components/UI/MainText';
import ButtonWithBackground from './../../components/UI/ButtonWithBackground';

import backgroundImage from './../../assets/background.png';

export default class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    }

    test = () => {
        alert("Helo");
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

                <View style={styles.container}>    

                    <MainText>
                        <HeadingText>Please Log In</HeadingText>
                    </MainText>

                    <ButtonWithBackground color="#29aaf4" onPress={this.test}>
                        Switch to Login
                    </ButtonWithBackground>

                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your Email-Address" style={styles.input} />
                        <DefaultInput placeholder="Password" style={styles.input} />
                        <DefaultInput placeholder="Password confirmation" style={styles.input} />
                    </View>

                    <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>
                        Submit
                    </ButtonWithBackground>
                    
                </View>

            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({

    backgroundImage: {
        width: "100%",
        flex: 1,
    },

    container: {
        alignItems: 'center',
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