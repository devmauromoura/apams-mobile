import * as types from './types';
import * as requests from './requests';


export const callAnimalsPending = (token) => {
    return {
        type: types.GET_ANIMALS_PENDING,
    }
}
export const callAnimalsFail = (error) => {
    return {
        type: types.GET_ANIMALS_FAIL,
        payload: error
    }
}
export const callAnimalsSuccess = (data) => {
    return {
        type: types.GET_ANIMALS_SUCCESS,
        payload: data.data
    }
}

export const callAnimals = (token, query) => {
    return async dispacth => {
        dispacth(callAnimalsPending());

        await requests.requestAnimals(token, query)
            .then(res => dispacth(callAnimalsSuccess(res.data)))
            .catch(error => dispacth(callAnimalsFail(error)))
    }
}

export const callGalleryPending = () => {
    return {
        type: types.GET_ANIMALS_GALLERY_PENDING,
    }
}
export const callGalleryFail = (error) => {
    return {
        type: types.GET_ANIMALS_GALLERY_FAIL,
        payload: error
    }
}
export const callGallerySuccess = (data) => {
    return {
        type: types.GET_ANIMALS_GALLERY_SUCCESS,
        payload: data.data
    }
}

export const callGallery = (token, id) => {
    return async dispacth => {
        dispacth(callGalleryPending());

        await requests.requestGallery(token, id)
            .then(res => dispacth(callGallerySuccess(res.data)))
            .catch(error => dispacth(callGalleryFail(error)))
    }
}


export const callAdoptPending = () => {
    return {
        type: types.ADOPT_PENDING,
    }
}
export const callAdoptFail = (error) => {
    return {
        type: types.ADOPT_FAIL,
        payload: error
    }
}
export const callAdoptSuccess = (data) => {
    return {
        type: types.ADOPT_SUCCESS,
        payload: data.data
    }
}

export const callAdopt = (token, id) => {
    return async dispacth => {
        dispacth(callAdoptPending());

        await requests.requestAdopt(token, id)
            .then(res => dispacth(callAdoptSuccess(res.data)))
            .catch(error => dispacth(callAdoptFail(error)))
    }
}
