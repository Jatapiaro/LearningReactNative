/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import PlaceInput from './src/components/PlaceInput';
import List from './src/components/List';
import placeImage from './src/assets/1.jpg';
import PlaceDetail from './src/components/PlaceDetail';

import { connect } from 'react-redux';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {

  constructor(props) {
    super(props);
    this.onButtonPress("popo");
    this.onButtonPress("pipi");
  }

  onButtonPress = (name) => {
    if (name) {
      this.props.onAddPlace(name);
      console.log("Place added");
    }
  }

  onModalClose  = () => {
    this.props.deselectPlace();
  } 

  onItemSelected = (key) => {
    this.props.selectPlace(key);
  }

  onItemDeleted = () => {
    this.props.onDeletePlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          item={this.props.selectedElement}
          onItemDeleted={this.onItemDeleted}
          onModalClose={this.onModalClose}
        />
        <PlaceInput 
          onButtonPress={this.onButtonPress}
        />
        <List 
          items={this.props.places}
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedElement: state.places.selectedElement
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    selectPlace: (key) => dispatch(selectPlace(key)),
    deselectPlace: () => dispatch(deselectPlace())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
