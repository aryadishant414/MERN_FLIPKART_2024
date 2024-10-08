import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCT_DETAILS_REQUEST, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_DETAILS_FAIL, GET_PRODUCT_DETAILS_RESET } from "../constants/productsConstants.js"


export const getProductsReducer = (state = { products: [] } , action) => {
    switch(action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {products: action.payload}

        case GET_PRODUCTS_FAIL:
            return {error: action.payload}

        default:
            return state    
    }
}

export const getProductDetailsReducer = (state = { product: {} } , action) => {
    switch(action.type) {
        case GET_PRODUCT_DETAILS_REQUEST:
            // console.log("SINGLE PRODUCT BY ID KE REDUCER KE ANDAR");  // just to check
            
            return { loading: true }
        case GET_PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload}
        case GET_PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        case GET_PRODUCT_DETAILS_RESET:
            return { product: {} }
        default:
            return state
    }
}


// NOTE:
// state: this is current state
// action: this is updated state