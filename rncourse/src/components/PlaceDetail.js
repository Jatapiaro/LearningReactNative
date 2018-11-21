import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const PlaceDetail = (props) => (

    <Modal onRequestClose={props.onModalClose} 
        style={styles.modal}
        visible={props.item.name !== null}>
        <View style={styles.modalContainer}>
            <Image style={styles.image} source={(props.item.image !== null)? props.item.image : null} />
            <Text style={styles.placeName}>{(props.item.name !== null)? props.item.name : ''}</Text>
            <View style={styles.buttonRow}>
                <Button color="red" title="Eliminar" onPress={props.onItemDeleted} />
                <Button title="Cerrar" onPress={props.onModalClose} />
            </View>
        </View>
    </Modal>

)

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

export default PlaceDetail;