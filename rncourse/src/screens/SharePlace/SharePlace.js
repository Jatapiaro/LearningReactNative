import React, {Component} from 'react';
import { View, Button, Text, StyleSheet, TextInput, ScrollView, Image } from 'react-native';

import  { connect } from 'react-redux';
import { addPlace, toggleSideMenu } from './../../store/actions/index';
import PlaceInput from '../../components/PlaceInput';
import { Navigation } from 'react-native-navigation';

import DefaultInput from './../../components/UI/DefaultInput';
import MainText from './../../components/UI/MainText';
import HeadingText from './../../components/UI/HeadingText';

import ImagePlaceholder from './../../assets/1.jpg';

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
            <ScrollView>
                <View style={styles.container}>
                    <MainText><HeadingText style={styles.headingText}>Share a place with us!</HeadingText></MainText>
                    <View style={styles.placeHolder}><Text>Map</Text></View>
                    <View style={styles.button}>
                        <Button title="Locate Me" />
                    </View>
                    <PlaceInput />
                    <View style={styles.button}>
                        <Button title="Locate Me" />
                    </View>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({

    button: {
        margin: 8
    },

    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 25
    },

    imagePlaceholder: {
        width: "100%",
        height: "100%"
    },

    headingText: {
        color: "#000"
    },

    placeHolder: {
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "#eee",
        width: "80%",
        height: 120
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