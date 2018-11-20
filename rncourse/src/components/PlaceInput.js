import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

export default class PlaceInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    value={this.props.name}
                    placeholder="An awesome place"
                    onChangeText={this.props.handleNameChange}
                />
                <Button
                    styles={styles.customButton}
                    title="Add"
                    onPress={this.props.onButtonPress}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center"
    },
    textInput: {
        width: "70%",
        borderColor: "#000",
    },
    customButton: {
        width: "30%"
    }
});