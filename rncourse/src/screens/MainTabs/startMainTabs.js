import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource('md-map', 30),
        Icon.getImageSource('ios-share-alt', 30),
        Icon.getImageSource('ios-menu', 30)
    ]).then((res) => {
        Navigation.setRoot({
            root: {
                sideMenu: {
                    left: {
                        component: {
                            name: 'awesome-places.SideDrawerScreen',
                            passProps: {
                                text: 'This is a left side menu screen'
                            }
                        }
                    },
                    center: {
                        bottomTabs: {
                            children: [
                                {
                                    stack: {
                                        children: [
                                            {
                                                component: {
                                                    name: 'awesome-places.SharePlaceScreen',
                                                    options: {
                                                        topBar: {
                                                            animate: false,
                                                            visible: true,
                                                            title: {
                                                                text: 'Share'
                                                            },
                                                            leftButtons: [
                                                                {
                                                                    id: 'sideDrawerButton',
                                                                    icon: res[2],
                                                                }
                                                            ],
                                                        },
                                                        bottomTab: {
                                                            fontSize: 12,
                                                            text: 'A',
                                                            textColor: "#000",
                                                            selectedTextColor: "#FF0000",
                                                            icon: res[1],
                                                            iconColor: '#1B4C77',
                                                            selectedIconColor: '#0f0',
                                                        }
                                                    }
                                                },
                                            }
                                        ]
                                    }
                                },
                                {
                                    stack: {
                                        children: [
                                            {
                                                component: {
                                                    name: 'awesome-places.FindPlaceScreen',
                                                    options: {
                                                        topBar: {
                                                            animate: false,
                                                            visible: true,
                                                            title: {
                                                                text: 'Find place'
                                                            },
                                                            leftButtons: [
                                                                {
                                                                    id: 'sideDrawerButton',
                                                                    icon: res[2]
                                                                }
                                                            ],
                                                        },
                                                        bottomTab: {
                                                            fontSize: 12,
                                                            text: 'B',
                                                            icon: res[0],
                                                            iconColor: '#1B4C77',
                                                            selectedIconColor: '#0f0',
                                                        }
                                                    }
                                                },
                                            }
                                        ]
                                    }
                                },
                            ],
                        }
                    },
                }
            }
        });
    })
}

export default startTabs;