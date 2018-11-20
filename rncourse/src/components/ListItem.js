import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View>
            <Text style={styles.listItem}>
                {props.item}
            </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin: 2
    }
});

export default ListItem;