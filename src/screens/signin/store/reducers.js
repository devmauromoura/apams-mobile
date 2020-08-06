import { Alert } from 'react-native';
import * as types from './types';

const initialState = {
  loading: false,
  token: ''
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_PENDING:
      return {
        ...state,
        loading: true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        loading: false
      }
    case types.LOGIN_FAIL:
      Alert.alert('Falha!', 'Verifique suas credenciais.');
      return {
        ...state,
        loading: false
      }
    case types.SAVE_TOKEN:
      return {
        ...state,
        token: action.payload
      }

    default:
      return state;
  }
};