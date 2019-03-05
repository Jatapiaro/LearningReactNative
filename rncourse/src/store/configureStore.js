import { createStore, combineReducers } from 'redux';
import placesReducer from './reducers/places';
import sideMenuReducer from './reducers/sidemenu';

const rootReducer = combineReducers({
    places: placesReducer,
    sideMenu: sideMenuReducer,
});

const configureStore = () => {
    return createStore(rootReducer); 
};

export default configureStore;