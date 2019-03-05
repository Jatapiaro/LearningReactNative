import React from 'react';
import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';

import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

const store = configureStore();

// Register screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => (props) => (
	<Provider store={store}>
		<SharePlaceScreen {...props} />
	</Provider>
), () => SharePlaceScreen);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => (props) => (
	<Provider store={store}>
		<FindPlaceScreen {...props} />
	</Provider>
), () => FindPlaceScreen);
Navigation.registerComponent("awesome-places.PlaceDetailScreen", () => (props) => (
	<Provider store={store}>
		<PlaceDetailScreen {...props} />
	</Provider>
), () => PlaceDetailScreen);
Navigation.registerComponent("awesome-places.SideDrawerScreen", () => (props) => (
	<Provider store={store}>
		<SideDrawer {...props} />
	</Provider>
), () => SideDrawer);


// Start the app
Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			stack: {
				children: [
					{
						component: {
							id: 'id',
							name: 'awesome-places.AuthScreen',
							options: {
								topBar: {
									title: {
										text: 'Título'
									}
								}
							}
						}
					}
				],
			}
		}
	});
});