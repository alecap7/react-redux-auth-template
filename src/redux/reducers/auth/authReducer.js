import {
    LOGIN,
    LOGOUT
} from '../../actions/utils/constant/authConstants';

export const initialState = {
    isUserLogged: false,
    user: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN :
            return {
                isUserLogged: true,
                user: action.data.user
            };
        case LOGOUT :
            return {
                isUserLogged: false,
                user: null
            };
        default:
            return state;
    }
};