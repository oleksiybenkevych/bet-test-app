// Find Hacker News API here
// https://github.com/HackerNews/API

// TODO fetch ask stories (https://hacker-news.firebaseio.com/v0/askstories.json)
// export function loadTopstories() {
//     return async (dispatch, getState) => {};
// }

// TODO fetch item by id (https://hacker-news.firebaseio.com/v0/item/<itemId>.json)
// function fetchStoryById(id) {}

import { userService } from '../services';

const createAction =
    (type) =>
    (payload = {}) => ({
        type,
        payload,
    });

const createRequest = (type, requestCallback) => {
    const action = {
        request: createAction(`${type}_REQUEST`),
        success: createAction(`${type}_SUCCESS`),
        failure: createAction(`${type}_FAILURE`),
    };
    return (payload = {}) =>
        (dispatch, getState) =>
            requestCallback({ action, payload, dispatch, getState });
};
export const actionTypes = {
    REGISTER_REQUEST: 'REGISTER_REQUEST',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGOUT: 'LOGOUT',
};

export const actions = {
    login: createRequest(actionTypes.LOGIN_REQUEST, ({ action, payload, dispatch }) => {
        const { values, history } = payload;
        dispatch(action.request(values));
        userService.login(values).then(
            (user) => {
                dispatch(action.success(user));
                history('/');
            },
            (error) => {
                dispatch(action.failure(error));
            },
        );
    }),
    register: createRequest(actionTypes.REGISTER_REQUEST, ({ action, payload, dispatch }) => {
        const { values, history } = payload;

        dispatch(action.request(values));
        userService.register(values).then(
            (user) => {
                dispatch(action.success(user));
                history('/login');
            },
            (error) => {
                dispatch(action.failure(error));
            },
        );
    }),
    logout: () => {
        userService.logout();
        return { type: actionTypes.LOGOUT };
    },
};
