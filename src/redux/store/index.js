import {legacy_createStore as createStore} from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers/rootReducer';

export const store = createStore(rootReducers, applyMiddleware(thunk));