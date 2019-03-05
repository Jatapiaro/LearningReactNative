import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

import List from './../../components/List';

import { connect } from 'react-redux';
import { toggleSideMenu } from './../../store/actions/index';



class FindPlaceScreen extends Component {

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    navigationButtonPressed({ buttonId }) {
        const visible = !this.props.sideMenu;
        Navigation.mergeOptions(this.props.componentId, {
            sideMenu: {
                'left': {
                    visible: visible
                }
            }
        });
        this.props.toggleSideMenu(visible);
    }

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
        sideMenu: state.sideMenu.visible
    }
}
const mapDispatchToProps = dispatch => {
    return {
        toggleSideMenu: (visible) => dispatch(toggleSideMenu(visible))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);