import * as types from './types';

const initialState = {
    loading: false,
    animals: [],
    gallery: []
};

export const animalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ANIMALS_PENDING:
            return {
                ...state,
                loading: true
            };
        case types.GET_ANIMALS_SUCCESS:
            return {
                ...state,
                loading: false,
                animals: action.payload
            };
        case types.GET_ANIMALS_FAIL:
            return {
                ...state,
                loading: false
            };

        case types.GET_ANIMALS_GALLERY_PENDING:
            return {
                ...state,
                loading: true
            };
        case types.GET_ANIMALS_GALLERY_SUCCESS:
            return {
                ...state,
                loading: false,
                gallery: action.payload
            };
        case types.GET_ANIMALS_GALLERY_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
}