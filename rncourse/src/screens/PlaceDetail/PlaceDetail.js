import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { deletePlace } from './../../store/actions/index';

import { Navigation } from 'react-native-navigation';

class PlaceDetailScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    placeDeleteHandler = () => {
        this.props.onDeletePlace(this.props.item.key);
        this.closeScreen();
    }

    closeScreen = () => {
        Navigation.pop(this.props.componentId);
    }

    render() {
        return (
            <View style={styles.modalContainer}>
                <Image style={styles.image} source={(this.props.item.image !== null)? this.props.item.image : null} />
                <Text style={styles.placeName}>{(this.props.item.name !== null)? this.props.item.name : ''}</Text>
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={this.placeDeleteHandler}>
                        <Icon size={30} name="ios-trash" color="red" />
                    </TouchableOpacity>
                    <Button title="Cerrar" onPress={this.closeScreen} />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 25,
    },
    image: {
        width: "100%",
        height: 250
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeName: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonRow: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: key => dispatch(deletePlace(key))
    }
}
export default connect(null, mapDispatchToProps)(PlaceDetailScreen);
