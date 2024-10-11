import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants.js";


export const cartReducer = (state = {cartItems: []}, action) => {
    switch(action.type) {
        case ADD_TO_CART : 
            const item = action.payload;
            const exist = state.cartItems.find(product => product.id === item.id);
            
            if(exist) {
                // return {...state, cartItems: state.cartItems.map(data => data.product === exist.product ? item : data)}

                 // If the item exists, update its quantity
                return {
                    ...state,
                    cartItems: state.cartItems.map((data) =>
                        data.id === exist.id ? { ...data, quantity: data.quantity + item.quantity } : data
                    )
                };
            } else {
                return {...state, cartItems: [...state.cartItems, item]};
            }

        case REMOVE_FROM_CART :
            console.log("INSIDE REMOVE REDUCER");
            return {...state, cartItems: state.cartItems.filter(eachProduct => eachProduct.id !== action.payload)};
        
        default :
            return state;

    }
}