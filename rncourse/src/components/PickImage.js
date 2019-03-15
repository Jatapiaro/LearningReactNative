import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class PickImage extends Component {

    render() {
        return (
            <View>
                    <View style={styles.placeHolder}>
                        <Image source={ImagePlaceholder} style={styles.imagePlaceholder}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Pick Image"/>
                    </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    button: {
        margin: 8
    },

    imagePlaceholder: {
        width: "100%",
        height: "100%"
    },

    placeHolder: {
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "#eee",
        width: "80%",
        height: 120
    }

});
