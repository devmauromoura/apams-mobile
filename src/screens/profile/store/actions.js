import * as types from './types';
import * as UserRequests from './requests';

export const callUserData = (token) => {
    return async dispatch => {
        dispatch(UserDataPending());

        await UserRequests.requestDataUser(token)
            .then(res => dispatch(UserDataSuccess(res)))
            .catch(error => dispatch(UserDataFail(error)))
    }
}

export const UserData = () => {
    return {
        type: types.GET_DATA_USER
    }
}

export const UserDataPending = () => {
    return {
        type: types.GET_DATA_USER_PENDING
    }
}

export const UserDataFail = (error) => {
    return {
        type: types.GET_DATA_USER_FAIL,
        payload: error
    }
}

export const UserDataSuccess = (res) => {
    return {
        type: types.GET_DATA_USER_SUCCESS,
        payload: res.data.data
    }
}


export const callUpdateUser = (token, data) => {
    return async dispatch => {
        dispatch(UpdateDataPending());

        await UserRequests.updateDataUser(token, data)
            .then(res => dispatch(UpdateDataSuccess(res)))
            .catch(error => dispatch(UpdateDataFail(error)))
    }
}



export const UpdateData = () => {
    return {
        type: types.UPDATE_DATA_USER,
    }
}

export const UpdateDataPending = () => {
    return {
        type: types.UPDATE_DATA_USER_PENDING,
    }
}

export const UpdateDataFail = (error) => {
    return {
        type: types.UPDATE_DATA_USER_FAIL,
        payload: error
    }
}

export const UpdateDataSuccess = (data) => {
    return {
        type: types.UPDATE_DATA_USER_SUCCESS,
        payload: data
    }
}

export const callLogoutUser = (token) => {
    return async dispatch => {
        dispatch(logoutPending());

        await UserRequests.requestLogout(token)
            .then(res => dispatch(logoutSuccess(res)))
            .catch(error => dispatch(logoutFail(error)))
    }
}

export const logout = () => {
    return {
        type: types.LOGOUT_USER,
    }
}

export const logoutPending = () => {
    return {
        type: types.LOGOUT_USER_PENDING,
    }
}

export const logoutFail = (error) => {
    return {
        type: types.LOGOUT_USER_FAIL,
        payload: error
    }
}

export const logoutSuccess = (data) => {
    return {
        type: types.LOGOUT_USER_SUCCESS,
        payload: data
    }
}