import * as types from './types';

const initialState = {
    loading: false,
    loadingc: false,
    error: '',
    posts: [],
    comments: []
};

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POST_DATA_PENDING:
            return {
                ...state,
                loading: true
            };

        case types.GET_POST_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case types.GET_POST_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload.data
            };
        case types.GET_COMMENTS_PENDING:
            return {
                ...state,
                loadingc: true
            };
        case types.GET_COMMENTS_FAIL:
            return {
                ...state,
                loadingc: false,
                error: action.payload
            };

        case types.GET_COMMENTS_SUCCESS:
            return {
                ...state,
                loadingc: false,
                comments: action.payload.data
            };

        default:
            return state;
    }
}