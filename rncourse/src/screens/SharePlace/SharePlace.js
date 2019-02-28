import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlaceDetail from '../../components/PlaceDetail';

import  { connect } from 'react-redux';
import { addPlace } from './../../store/actions/index';
import PlaceInput from '../../components/PlaceInput';

class SharePlaceScreen extends Component {

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

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};
export default connect(null, mapDispatchToProps)(SharePlaceScreen);