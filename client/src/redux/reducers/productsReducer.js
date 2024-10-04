import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from "../constants/productsConstants.js"


export const getProductsReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {products: action.payload}

        case GET_PRODUCTS_FAIL:
            return {error: action.payload}

        default:
            return state    
    }
}

// NOTE:
// state: this is current state
// action: this is updated state