import { TOGGLE_SIDEMENU } from './../actions/actionTypes';

const initialState = {
    visible: false
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case TOGGLE_SIDEMENU:
            return {
                ...state,
                visible: action.visible
            }
        default:
            return state;
    }

}

export default reducer;