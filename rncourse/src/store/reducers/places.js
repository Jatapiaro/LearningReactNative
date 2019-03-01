import {
    ADD_PLACE,
    DELETE_PLACE,
    SELECT_PLACE,
    DESELECT_PLACE
} from './../actions/actionTypes';

const initialState = {
    places: [
        {
            key: `random-id-${Math.random()}`,
            name: 'ss',
            image: {
                uri: "http://wpc.72c72.betacdn.net/8072C72/vos-images/sites/default/files/styles/landscape_1020_560/public/nota_periodistica/Radiohead-2016_0.jpg"
            }
        },
        {
            key: `random-id-${Math.random()}`,
            name: 'action.placeName',
            image: {
                uri: "http://wpc.72c72.betacdn.net/8072C72/vos-images/sites/default/files/styles/landscape_1020_560/public/nota_periodistica/Radiohead-2016_0.jpg"
            }
        }
    ],
    selectedElement: {
        image: null,
        name: null,
        key: null
    }
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: `random-id-${Math.random()}`,
                    name: action.placeName,
                    image: {
                        uri: "http://wpc.72c72.betacdn.net/8072C72/vos-images/sites/default/files/styles/landscape_1020_560/public/nota_periodistica/Radiohead-2016_0.jpg"
                    }
                }),
            }
        case DELETE_PLACE: 
            return {
                ...state,
                places: state.places.filter((place, i) => {
                    return place.key !== action.key;
                }),
                selectedElement: {
                    image: null,
                    name: null,
                    key: null
                }
            }
        case SELECT_PLACE:
            return {
                ...state,
                selectedElement: state.places.find(place => {
                    return place.key == action.key
                })
            }
        case DESELECT_PLACE:
            return {
                ...state,
                selectedElement: {
                    image: null,
                    name: null,
                    key: null
                }
            }
        default:
            return state;
    }

}


export default reducer;