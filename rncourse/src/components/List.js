import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ListItem from './ListItem';

const List = (props) => (
    <ScrollView style={styles.listContainer}>
        {
            props.items.map((p, i) => 
                <ListItem 
                    key={i}
                    item={p}
                    onItemPressed={() => props.onItemDeleted(i)}
                />
            )
        }
    </ScrollView>
)

export default List;

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});