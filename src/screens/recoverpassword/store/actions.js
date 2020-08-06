import * as types from './types';
import * as requests from './requests';

export const callRecoveryPending = (token) => {
    return {
        type: types.RECOVERY_PASSWORD_PENDING
    }
}
export const callRecoveryFail = (error) => {
    return {
        type: types.RECOVERY_PASSWORD_FAIL,
        payload: error
    }
}
export const callRecoverySuccess = (data) => {
    return {
        type: types.RECOVERY_PASSWORD_SUCCESSS,
        payload: data
    }
}

export const callRecovery = (email) => {
    return async dispacth => {
        dispacth(callRecoveryPending());

        await requests.recoveryPassword(email)
            .then(res => dispacth(callRecoverySuccess(res.data)))
            .catch(error => dispacth(callRecoveryFail(error)))
    }
}
