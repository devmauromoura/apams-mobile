import { Alert } from 'react-native';
import * as types from './types';

export const recoverMiddlewares = store => next => action => {
    if (action.type === types.RECOVERY_PASSWORD_FAIL) {
        Alert.alert('Erro!', 'Não foi possível redefinir a senha, tente novamente mais tarde.');
    }
    if (action.type === types.RECOVERY_PASSWORD_SUCCESS) {
        Alert.alert('Sucesso!', 'A nova senha foi enviada para seu e-mail.');
    }
    next(action);
}

