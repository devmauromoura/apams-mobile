import * as types from './types';

const initialState = {
    loading: false,
    loadings: false,
    about: [],
    sponsors: []
};

export const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ABOUT_DATA_PENDING:
            return {
                ...state,
                loading: true
            };

        case types.GET_ABOUT_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case types.GET_ABOUT_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                about: action.payload.data
            };

        case types.GET_SPONSOR_DATA_PENDING:
            return {
                ...state,
                loadings: true
            };

        case types.GET_SPONSOR_DATA_FAIL:
            return {
                ...state,
                loadings: false,
                error: action.payload
            };

        case types.GET_SPONSOR_DATA_SUCCESS:
            return {
                ...state,
                loadings: false,
                sponsors: action.payload.data
            };

        default:
            return state;
    }
}