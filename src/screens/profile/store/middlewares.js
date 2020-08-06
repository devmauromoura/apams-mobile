import { Alert } from 'react-native';
import * as types from './types';
import * as RootNavigation from '../../../RootNavigation';
import AsyncStorage from '@react-native-community/async-storage';

export const profileMiddlewares = store => next => action => {
    if (action.type === types.UPDATE_DATA_USER_SUCCESS) {
        Alert.alert('Sucesso!', 'Seus dados foram alterados com sucesso.');
    }
    if (action.type === types.LOGOUT_USER_SUCCESS) {
        AsyncStorage.removeItem('@USER/TOKEN');
        RootNavigation.navigate('SignIn');
    }
    next(action);
}

