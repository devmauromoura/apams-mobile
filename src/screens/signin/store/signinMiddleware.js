import * as types from './types';
import * as RootNavigation from '../../../RootNavigation';
import AsyncStorage from '@react-native-community/async-storage';

import * as HomeActions from '../../home/store/actions';

export const signinMiddleware = store => next => action => {
    if (action.type === types.LOGIN_SUCCESS) {
        AsyncStorage.setItem('@USER/TOKEN', action.payload.token);
        store.dispatch(HomeActions.callPosts(action.payload.token));
        RootNavigation.navigate('Indice');
    }
    next(action);
}

