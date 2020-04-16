import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    hiddenSign: true
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.TOOGLE_SIGN:
            return {
                ...state,
                hiddenSign: !state.hiddenSign
            }
        default:
            return state;
    }
}

export default userReducer;