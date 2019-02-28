import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

import List from './../../components/List';

import { connect } from 'react-redux';


class FindPlaceScreen extends Component {



    navigateToPlace =  (key) => {
        let place = this.props.places.find(place => {
            return place.key === key;
        });
        Navigation.push(this.props.componentId, {
            component: {
                name: 'awesome-places.PlaceDetailScreen',
                passProps: {
                    item: place
                },
                options: {
                    topBar: {
                        title: {
                            text: place.name
                        }
                    }
                }
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <List items={this.props.places} onItemSelected={this.navigateToPlace}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        margin: 25
    }

});

const mapStateToProps = state => {
    return {
        places: state.places.places,
    }
}

export default connect(mapStateToProps)(FindPlaceScreen);