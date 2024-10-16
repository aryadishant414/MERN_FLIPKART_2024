
import { Box, Button, styled } from "@mui/material";

import {ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import {useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../redux/actions/cartActions.js";



import { paymentGateway } from "../../services/api.js";

import {loadStripe} from '@stripe/stripe-js';


const LeftContainer = styled(Box)  (({theme}) => ({
        /* border: 3px solid red; */
        minWidth: '40%',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('lg')]: {
            padding: '20px 40px'
        }
}));

const Image = styled('img')({
    // padding: '15px 20px',
    // border: '1px solid #f0f0f0',
    width: '95%',
    padding: '15px'
});

const StyledButton = styled(Button)`
    width: 48%;
    height: 50px;
    border-radius: 2px;
`;


const ActionItem = ({product}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = product;
    const [quantity, setQuantity] = useState(1);


    const addItemToCart = () => {
        navigate('/cart');
        dispatch(addToCart(id,quantity));
    }

    // payment integration
    const buyNow = async () => {
        const singleProductPayload = {singleProduct: [product]};
        console.log("INSIDE SINGLE PRODUCT IN BUYNOW IS : ", product);
        const response = await paymentGateway(singleProductPayload);

        console.log("DATA INSIDE RESPONSE IN BUYNOW IS : ", response);

        const stripe = await loadStripe("pk_test_51Q8yX5LJipLU7BRKEqNXmPhWm61xHaws7MDf2TWe5uWwfVI7xIV5PNjIm6jSVt9lBrTcB2zLEvFZ5qzYKTQK3AV200FK1oB56p");
        const session = await response.json;
        console.log("DATA INSIDE SESSION IN BUYNOW IS : ", session);
        
        const result = stripe.redirectToCheckout({
            sessionId: response.data.id
        });

        if(!result) {
            console.log("Error in payment integration by CLient Side");
            
        }
        
    }

    return (
        <LeftContainer>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0'}}>
                <Image src={product.detailUrl} alt="product" />
            </Box>
            <StyledButton onClick={addItemToCart} variant="contained" style={{marginRight: 10, background: '#ff9f00'}} ><Cart />Add to Cart</StyledButton>
            <StyledButton onClick={() => buyNow()} variant="contained" style={{background: '#fb541b'}}><Flash />Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;