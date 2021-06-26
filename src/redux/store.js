import { createStore, combineReducers } from 'redux';
import theme from './theme/reducer';

const reducer = combineReducers({ theme });

const store = createStore(reducer);

export default store;
