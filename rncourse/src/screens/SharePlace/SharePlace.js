import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import  { connect } from 'react-redux';
import { addPlace, toggleSideMenu } from './../../store/actions/index';
import PlaceInput from '../../components/PlaceInput';

import { Navigation } from 'react-native-navigation';

class SharePlaceScreen extends Component {

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

    onButtonPress = (placeName) => {
        if ( placeName.length > 0 ) {
            this.props.onAddPlace(placeName);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <PlaceInput onButtonPress={this.onButtonPress}/>
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
        sideMenu: state.sideMenu.visible
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName)),
        toggleSideMenu: (visible) => dispatch(toggleSideMenu(visible))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);