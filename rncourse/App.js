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
import placeImage from './src/assets/1.jpg';
import PlaceDetail from './src/components/PlaceDetail';

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
      places: [
        { 
          key: `random-id-${Math.random()}`,
          name: 'Jacobo',
          image: placeImage
        },
      ],
      name: '',
      selectedElement: {
        name: null,
        image: null,
        key: null
      }
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
          places: prevState.places.concat({
            key: `random-id-${Math.random()}`,
            name: this.state.name,
            image: {
              uri: "http://wpc.72c72.betacdn.net/8072C72/vos-images/sites/default/files/styles/landscape_1020_560/public/nota_periodistica/Radiohead-2016_0.jpg"
            }
          }),
          name: ''
        }
      });
    }
  }

  onModalClose  = () => {
    this.setState({
      selectedElement: {
        name: null,
        image: null,
        key: null
      }
    });
  } 

  onItemSelected = (key) => {
    this.setState((prevState) => {
      return {
        selectedElement: prevState.places.find(place => {
          return place.key == key
        })
      }
    });
  }

  onItemDeleted = () => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place, i) => {
          return place.key !== prevState.selectedElement.key;
        }),
        selectedElement: {
          image: null,
          name: null,
          key: null
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          item={this.state.selectedElement}
          onItemDeleted={this.onItemDeleted}
          onModalClose={this.onModalClose}
        />
        <PlaceInput 
          name={this.state.name}
          handleNameChange={this.handleNameChange}
          onButtonPress={this.onButtonPress}
        />
        <List 
          items={this.state.places}
          onItemSelected={this.onItemSelected}
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
