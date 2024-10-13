import { useSelector } from "react-redux";
import Grid from '@mui/material/Grid';  // older grid
import { Box, Button, Typography, styled } from "@mui/material";
import CartItem from "./CartItem.jsx";
import TotalBalance from "./TotalBalance.jsx";
import EmptyCart from "./EmptyCart.jsx";
// import Grid from '@mui/material/Grid2'; // For the new Grid


import { paymentGateway } from "../../services/api.js";

import {loadStripe} from '@stripe/stripe-js';



const Container = styled(Grid) (({theme}) => ({
    // border: '2px solid orange',
    padding: '30px 135px',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0px'
    }
}))


const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;

const ButtonWrapper = styled(Box)`
    /* border: 2px solid black; */
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    width: 250px;
    height: 51px;
    border-radius: 2px;
`;

const LeftComponent = styled(Grid) (({theme}) => ({
    /* border: 2px solid purple; */
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
        marginBottom:15
    }
}));




const Cart = () => {

    const {cartItems} = useSelector(state => state.cart);
    console.log("INSIDE CART AND CART ITEMS : ",cartItems);
    
    const buyNow = async () => {

        console.log("INSIDE buyNOW");
        
        const multipleProductPayload = {multipleProducts: cartItems}
        const response = await paymentGateway(multipleProductPayload);

        const stripe = await loadStripe("pk_test_51Q8yX5LJipLU7BRKEqNXmPhWm61xHaws7MDf2TWe5uWwfVI7xIV5PNjIm6jSVt9lBrTcB2zLEvFZ5qzYKTQK3AV200FK1oB56p");
        // const session = await response.json;
        // console.log("DATA INSIDE SESSION IN BUYNOW IS : ", session);
        console.log("DATA INSIDE RESPONSE IN BUYNOW IS : ", response);
        
        const result = stripe.redirectToCheckout({
            sessionId: response.data.id
        });

        if(!result) {
            console.log("Error in payment integration by CLient Side");
            
        }
        
    }


    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>
                                    My Cart({cartItems.length})
                                    
                                </Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} />
                                ))
                            }
                            <ButtonWrapper>
                                <StyledButton onClick={buyNow}>Place Order</StyledButton>
                            </ButtonWrapper>
                        </LeftComponent>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalBalance cartItems={cartItems} />
                        </Grid>
                    </Container>

                    :
                    <EmptyCart />
            }
        </>
    )
};

export default Cart;