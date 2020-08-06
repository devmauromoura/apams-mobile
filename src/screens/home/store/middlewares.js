import { Alert } from 'react-native';
import * as types from './types';
import * as RootNavigation from '../../../RootNavigation';
import AsyncStorage from '@react-native-community/async-storage';

export const homeMiddlewares = store => next => action => {
    if (action.type === types.VERIFY_TOKEN_FAIL) {
        Alert.alert('Sessão expirada!.', 'Sua sessão expirou, acesse novamente.');
        AsyncStorage.removeItem('@USER/TOKEN');
        RootNavigation.navigate('SignIn');
    }
    if (action.type === types.VERIFY_TOKEN_SUCCESS) {
        RootNavigation.navigate('Indice');
    }
    next(action);
}

