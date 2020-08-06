import { combineReducers } from 'redux';
import { registerReducer } from '../../screens/signup/store/reducers';
import { loginReducer } from '../../screens/signin/store/reducers';
import { profileReducer } from '../../screens/profile/store/reducers';
import { homeReducer } from '../../screens/home/store/reducers';
import { animalsReducer } from '../../screens/animals/store/reducers';
import { aboutReducer } from '../../screens/about/store/reducers';

const reducers = combineReducers({
    register: registerReducer,
    login: loginReducer,
    profile: profileReducer,
    home: homeReducer,
    animals: animalsReducer,
    about: aboutReducer
});

export default reducers;