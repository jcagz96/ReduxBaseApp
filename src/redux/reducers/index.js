import { combineReducers } from 'redux';

import counterReducer from './counter';
import loggedReducer from './isLogged';
import productList from './productList';

const allReducers = combineReducers({
    counter: counterReducer,
    islogged: loggedReducer,
    carrinho: productList
});

export default allReducers;
