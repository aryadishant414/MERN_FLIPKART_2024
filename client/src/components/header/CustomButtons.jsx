import {Box, styled, Button, Typography} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import { useState } from 'react';

// components
import LoginDialogue from '../login/LoginDialogue.jsx';

const Wrapper = styled(Box)`
    /* border: 2px solid red; */
    display: flex;
    margin: 0 3% 0 auto;

    /* nedted styling */
    & > button, & > p, & > div {
        margin-right: 40px;
        font-size: 16px;
        align-items: center;
    }
`;

const Container = styled(Box)`
    display: flex;
`;

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`;

const CustomButtons = () => {
    const [open, setOpen] = useState(false);

    const openDialogue = () => {
        setOpen(true);
    }

    return (
        <>
           <Wrapper>
                <LoginButton variant="contained" onClick={() => openDialogue()}>Login</LoginButton>

                <Typography style={{marginTop: 3, width: 135}}>Become a Seller</Typography>
                <Typography style={{marginTop:3}}>More</Typography>

                <Container>
                    <ShoppingCart />
                    <Typography>Cart</Typography>
                </Container>
                <LoginDialogue open={open} setOpen={setOpen} />
           </Wrapper>
        </>
    )
}

export default CustomButtons;