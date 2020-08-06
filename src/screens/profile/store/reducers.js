import { Alert } from 'react-native';
import * as types from './types';

const initialState = {
  loading: false,
  user: {}
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA_USER_PENDING:
      return {
        ...state,
        loading: true
      };

    case types.GET_DATA_USER_FAIL:
      Alert.alert('Erro!', 'Não foi possível obter os dados.');
      return {
        ...state,
        loading: false
      };

    case types.GET_DATA_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      };

    default:
      return state;
  }
};