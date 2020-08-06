import * as types from './types';
import * as requests from './requests';


export const callAboutPending = (token) => {
    return{
        type: types.GET_ABOUT_DATA_PENDING,
    }
}
export const callAboutFail = (error) => {
    return{
        type: types.GET_ABOUT_DATA_FAIL,
        payload: error
    }
}
export const callAboutSuccess = (data) => {
    return{
        type: types.GET_ABOUT_DATA_SUCCESS,
        payload: data
    }
}

export const callAbout = ( token ) => {
    return async dispacth => {
        dispacth(callAboutPending());

        await requests.requestAbout(token)
            .then(res => dispacth(callAboutSuccess(res.data)))
                .catch(error => dispacth(callAboutFail(error)))
    }
}

export const callSponsorsPending = (token) => {
    return{
        type: types.GET_SPONSOR_DATA_PENDING,
    }
}
export const callSponsorsFail = (error) => {
    return{
        type: types.GET_SPONSOR_DATA_FAIL,
        payload: error
    }
}
export const callSponsorsSuccess = (data) => {
    return{
        type: types.GET_SPONSOR_DATA_SUCCESS,
        payload: data
    }
}

export const callSponsors = ( token ) => {
    return async dispacth => {
        dispacth(callSponsorsPending());

        await requests.requestSponsor(token)
            .then(res => dispacth(callSponsorsSuccess(res.data)))
                .catch(error => dispacth(callSponsorsFail(error)))
    }
}
