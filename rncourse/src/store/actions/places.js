import {
    ADD_PLACE,
    DELETE_PLACE,
    SELECT_PLACE,
    DESELECT_PLACE,
    TOGGLE_SIDEMENU
} from './actionTypes';

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    };
} 

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        key: key
    }
}

export const selectPlace = (key) => {
    return {
        type: SELECT_PLACE,
        key: key
    }
}

export const deselectPlace = () => {
    return  {
        type: DESELECT_PLACE
    }
}

export const toggleSideMenu = (visible) => {
    return {
        type: TOGGLE_SIDEMENU,
        visible: visible
    }
}