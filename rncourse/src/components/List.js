import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from './ListItem';

const List = (props) => (
    <FlatList
        style={styles.listContainer}
        data={props.items}
        renderItem={(info) => (
            <ListItem
                item={info.item.name}
                image={info.item.image}
                onItemPressed={() => props.onItemSelected(info.item.key)}
            />
        )}
    />
)

export default List;

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});