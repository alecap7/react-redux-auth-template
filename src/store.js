/**
 * Created by albertogiovanelli on 15/05/18.
 */
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {authReducer} from './redux/reducers/auth/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    authReducer
});

export const store = createStore(rootReducer, composeEnhancers());

console.log('getState',store.getState());