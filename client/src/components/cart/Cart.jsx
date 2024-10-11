import { useSelector } from "react-redux";
import Grid from '@mui/material/Grid';  // older grid
import { Box, Button, Typography, styled } from "@mui/material";
import CartItem from "./CartItem.jsx";
import TotalBalance from "./TotalBalance.jsx";
import EmptyCart from "./EmptyCart.jsx";
// import Grid from '@mui/material/Grid2'; // For the new Grid



const Container = styled(Grid) (({theme}) => ({
    border: '2px solid orange',
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
                                <StyledButton>Place Order</StyledButton>
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