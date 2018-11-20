/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, View} from 'react-native';
import PlaceInput from './src/components/PlaceInput';
import List from './src/components/List';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      places: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
      name: '',
    }
  }

  handleNameChange = (e) => {
    this.setState({
      name: e
    });
  }

  onButtonPress = () => {
    if ( this.state.name ) {
      this.setState((prevState) => {
        return {
          places: prevState.places.concat(this.state.name),
          name: ''
        }
      });
    }
  }

  onItemDeleted = (index) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index;
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput 
          name={this.state.name}
          handleNameChange={this.handleNameChange}
          onButtonPress={this.onButtonPress}
        />
        <List 
          items={this.state.places}
          onItemDeleted={this.onItemDeleted}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 30
  }
});
