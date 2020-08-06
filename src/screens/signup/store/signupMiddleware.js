import * as types from './types';
import * as RootNavigation from '../../../RootNavigation';

export const signupMiddleware = store => next => action => {
    if(action.type === types.CALL_REGISTER_SUCCESS) {
      RootNavigation.navigate('SignIn');
    }
    next(action);
  }

