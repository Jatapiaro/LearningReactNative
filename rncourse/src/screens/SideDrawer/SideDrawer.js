import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { connect } from 'react-redux';
import { toggleSideMenu } from './../../store/actions/index';

class SideDrawer extends Component {

    constructor(props) {
        super(props);
        Navigation.events().registerComponentDidDisappearListener(({ componentId }) => {
            this.props.toggleSideMenu(false);
        });
    }

    render() {
        return (
            <View style={[styles.container, styles.size]}>
                <Text>This is the sidedrawer</Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        backgroundColor: "#fff",
        flex: 1
    },
    size: {
        width: Dimensions.get('window').width * 0.8
    }
});

const mapDispatchToProps = dispatch => {
    return {
        toggleSideMenu: (visible) => dispatch(toggleSideMenu(visible))
    };
};
export default connect(null, mapDispatchToProps)(SideDrawer);