import axios from 'axios';

import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from '../constants/productsConstants.js';

const URL = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
    try {
        // let response = await axios.get(`${URL}/api/v1/auth/products`);
        // console.log("RAM RAM");// check
        
        let {data} = await axios.get(`${URL}/api/v1/auth/products`);
        // console.log("KAM KAM"); // check
        
        // console.log("Response of Redux Actions is : ", data);

        // dispatch({type: GET_PRODUCTS_SUCCESS , value: data})
        dispatch({type: GET_PRODUCTS_SUCCESS , payload: data})  // Dispatch ko call krte hee Automatically reducer call ho jaata hai

    } catch (error) {
        
        // dispatch({type: GET_PRODUCTS_FAIL, value: data})
        dispatch({type: GET_PRODUCTS_FAIL, payload: error.message});
        
        console.log(`Error while calling getProducts api From REDUX ACTIONS`, error.message);
    }
}


// just for understanding Object Destructuring
// let obj = {
//     config: {},
//     data: [],
//     headers: {},
//     status: 200,
//     message: ''
// }

// obj.data // isko use krte hai to get the data inside obj OBJECT 

// {data} = obj;  // obj ke andar sai Destructor karr rhe hai sirf 'data' name ki field ko
