import { createStore, applyMiddleware, compose  } from 'redux';
import ReduxThunk from 'redux-thunk'; 
import reducers from './reducers';

import { signupMiddleware } from '../screens/signup/store/signupMiddleware';
import { signinMiddleware } from '../screens/signin/store/signinMiddleware';
import { homeMiddlewares } from '../screens/home/store/middlewares';
import { profileMiddlewares } from '../screens/profile/store/middlewares';
import { recoverMiddlewares } from '../screens/recoverpassword/store/middlewares';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancer(
        applyMiddleware(
            ReduxThunk, 
            signinMiddleware, 
            signupMiddleware, 
            homeMiddlewares, 
            profileMiddlewares, 
            recoverMiddlewares
            )
        )
);

export default store;
    