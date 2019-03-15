import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import DefaultInput from './UI/DefaultInput';

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

    render() {
        return (
            <DefaultInput 
                placeholder="Place Name" 
                style={{width: "80%"}} 
                value={this.state.name}
                onChange={this.handleNameChange}
            />
        );
    }

}