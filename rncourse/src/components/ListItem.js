import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image 
                source={props.image} 
                style={styles.customImage}
                resizeMode="contain"
                />
            <Text>
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
        margin: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    customImage: {
        width: 50,
        height: 50,
        margin: 8
    }
});

export default ListItem;