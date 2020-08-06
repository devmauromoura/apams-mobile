import * as types from './types';
import { requestLogin } from './requests';


export const callLoginPending = () => {
    return {
        type: types.LOGIN_PENDING
    }
}

export const callLoginFail = (error) => {
    return {
        type: types.LOGIN_FAIL,
        payload: error
    }
}

export const callLoginSuccess = (response) => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: response
    }
}

export const callLogin = (data) => {
    return async dispacth => {
        dispacth(callLoginPending());

        await requestLogin(data)
            .then(res => dispacth(callLoginSuccess(res.data)))
            .catch(error => dispacth(callLoginFail(error)))
    }
}

export const saveToken = (token) => {
    return async dispacth => {
        dispacth({
            type: types.SAVE_TOKEN,
            payload: token
        });
    }
}