import { Alert } from 'react-native';
import * as types from './types';

const initialState = {
  loading: false
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CALL_REGISTER_PENDING:
      return {
        ...state,
        loading: true
      };
    case types.CALL_REGISTER_SUCCESS:
      Alert.alert('Sucesso!', 'Registro efetuado.');
      return {
        ...state,
        loading: false
      }

    case types.CALL_REGISTER_FAIL:
      Alert.alert('Atenção!', `${action.payload.msg}`);
      return {
        ...state,
        loading: false
      }

    default:
      return state;
  }
};