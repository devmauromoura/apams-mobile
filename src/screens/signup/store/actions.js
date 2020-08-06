import * as types from './types';
import { requestRegister } from './requests';

export const callRegisterStart = () => {
    return {
        type: types.CALL_REGISTER,
    }
}

export const callRegisterPending = () => {
    return {
        type: types.CALL_REGISTER_PENDING,
    }
}

export const callRegisterSuccess = (response) => {
    return {
        type: types.CALL_REGISTER_SUCCESS,
        payload: response
    }
}

export const callRegisterFail = (error) => {
    return {
        type: types.CALL_REGISTER_FAIL,
        payload: error
    }
}

export const callRegister = (data) => {
    return async dispatch => {
        dispatch(callRegisterPending());

        await requestRegister(data).then((response) => {
            if (response.status === 200) {
                dispatch(callRegisterSuccess(response.data))
            } else if (response.status === undefined) {
                dispatch(callRegisterFail({ msg: "Falha na comunicação com o servidor!" }))
            }
            else {
                dispatch(callRegisterFail(response.data.msg))
            }
        })
    }
}
