
import { Box, Button, styled } from "@mui/material";

import {ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import {useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../redux/actions/cartActions.js";

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

    return (
        <LeftContainer>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0'}}>
                <Image src={product.detailUrl} alt="product" />
            </Box>
            <StyledButton onClick={addItemToCart} variant="contained" style={{marginRight: 10, background: '#ff9f00'}} ><Cart />Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{background: '#fb541b'}}><Flash />Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;