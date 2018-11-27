import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

export default class PlaceInput extends Component {

    state = {
        name: ''
    }
    constructor(props) {
        super(props);
    }

    handleNameChange = (e) => {
        this.setState({
            name: e
        });
    }

    onButtonPress = () => {
        this.props.onButtonPress(this.state.name);
        this.setState({
            name: ''
        });
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    value={this.state.name}
                    placeholder="An awesome place"
                    onChangeText={this.handleNameChange}
                />
                <Button
                    styles={styles.customButton}
                    title="Add"
                    onPress={this.onButtonPress}
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