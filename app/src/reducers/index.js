import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import editor from './editor';

//TODO remove forms...
const rootReducer = combineReducers({
    form: formReducer,
    editor
});

export default rootReducer;
