import * as types from './types';
import * as requests from './requests';


export const callPostsPending = (token) => {
    return {
        type: types.GET_POST_DATA_PENDING,
    }
}
export const callPostsFail = (error) => {
    return {
        type: types.GET_POST_DATA_FAIL,
        payload: error
    }
}
export const callPostsSuccess = (data) => {
    return {
        type: types.GET_POST_DATA_SUCCESS,
        payload: data
    }
}

export const callPosts = (token) => {
    return async dispacth => {
        dispacth(callPostsPending());

        await requests.requestPosts(token)
            .then(res => dispacth(callPostsSuccess(res.data)))
            .catch(error => dispacth(callPostsFail(error)))
    }
}

export const VerifyTokenPending = (token) => {
    return {
        type: types.VERIFY_TOKEN_PENDING,
    }
}
export const VerifyTokenFail = (error) => {
    return {
        type: types.VERIFY_TOKEN_FAIL,
        payload: error
    }
}
export const VerifyTokenSuccess = (data) => {
    return {
        type: types.VERIFY_TOKEN_SUCCESS,
        payload: data
    }
}

export const callVerifyToken = (token) => {
    return async dispatch => {
        dispatch(VerifyTokenPending());

        await requests.requestVerifyToken(token)
            .then(res => dispatch(VerifyTokenSuccess(res.data)))
            .catch(error => dispatch(VerifyTokenFail(error)))
    }
}

export const callLikePost = (token, id) => {
    return async dispatch => {
        await requests.requestLikePost(token, id)
    }
}

export const callUnlikePost = (token, id) => {
    return async dispatch => {
        await requests.requestUnlikePost(token, id)
    }
}


export const callCommentsPending = (token) => {
    return {
        type: types.GET_COMMENTS_PENDING,
    }
}
export const callCommentsFail = (error) => {
    return {
        type: types.GET_COMMENTS_FAIL,
        payload: error
    }
}
export const callCommentsSuccess = (data) => {
    return {
        type: types.GET_COMMENTS_SUCCESS,
        payload: data
    }
}

export const callComments = (token, id) => {
    return async dispatch => {
        dispatch(callCommentsPending());

        await requests.requestComments(token, id)
            .then(res => dispatch(callCommentsSuccess(res.data)))
            .catch(error => dispatch(callCommentsFail(error)))
    }
}

export const sendCommentPending = () => {
    return {
        type: types.SEND_COMMENTS_PENDING,
    }
}
export const sendCommentFail = (error) => {
    return {
        type: types.SEND_COMMENTS_FAIL,
        payload: error
    }
}
export const sendCommentSuccess = (data) => {
    return {
        type: types.SEND_COMMENTS_SUCCESS,
        payload: data
    }
}


export const sendComment = (token, data) => {
    return async dispatch => {
        dispatch(sendCommentPending());

        await requests.sendComment(token, data)
            .then(res => dispatch(sendCommentSuccess(res.data)))
            .catch(error => dispatch(sendCommentFail(error)))
    }
}