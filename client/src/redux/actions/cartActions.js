import axios from 'axios';

import { ADD_TO_CART, ADD_TO_CART_ERROR, REMOVE_FROM_CART} from '../constants/cartConstants.js';


const URL = 'http://localhost:8000';

export const addToCart = (id, quantity) => async(dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/api/v1/auth/product/${id}`);

        dispatch({ type: ADD_TO_CART , payload: {...data, quantity}});
    } catch (error) {
        dispatch({ type: ADD_TO_CART_ERROR , payload: error.message});
    }
}

export const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id});
}