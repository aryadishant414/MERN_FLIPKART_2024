import {createStore, combineReducers, applyMiddleware} from 'redux';

import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productsReducer.js';
import { cartReducer } from './reducers/cartReducer.js';


// we are using combineReducers method coz we will be using More than 1 Reducer
// Reducer : Action jo hame perform krni hai jispe bhi
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;