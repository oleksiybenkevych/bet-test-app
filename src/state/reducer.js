import { actionTypes } from './actions';

const initialState = {
    user: {},
    loggedIn: false,
    loading: false,
    message: '',
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case `${actionTypes.LOGIN_REQUEST}_REQUEST`:
            return {
                ...state,
                loading: true,
                user: action.payload,
            };
        case `${actionTypes.REGISTER_REQUEST}_REQUEST`:
            return {
                ...state,
                loading: true,
                user: action.payload,
            };
        case `${actionTypes.LOGIN_REQUEST}_SUCCESS`:
            return {
                ...state,
                loading: false,
                user: action.payload,
                message: 'Login success',
            };
        case `${actionTypes.REGISTER_REQUEST}_SUCCESS`:
            return {
                ...state,
                loading: false,
                user: action.payload,
                message: 'Register success',
            };
        case `${actionTypes.LOGIN_REQUEST}_FAILURE`:
            return {
                ...state,
                loading: false,
                message: action.payload,
            };
        case `${actionTypes.REGISTER_REQUEST}_FAILURE`:
            return {
                ...state,
                loading: false,
                message: action.payload,
            };
        case `${actionTypes.LOGOUT}`:
            return {
                ...state,
                user: {},
            };

        default:
            return state;
    }
};
