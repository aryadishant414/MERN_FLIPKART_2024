import {Box, styled, Button, Typography, Badge} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import { useState } from 'react';
import { DataContext } from '../../context/DataProvider.jsx';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



// components
import LoginDialogue from '../login/LoginDialogue.jsx';
import { Profile } from './Profile.jsx';

const Wrapper = styled(Box) (({theme}) => ({
        /* border: 2px solid red; */
        display: 'flex',
        margin: '0 3% 0 auto',
    
        /* nedted styling */
        '& > button, & > p, & > div' : {
            marginRight: '40px !important',
            fontSize: '16px',
            alignItems: 'center'
        },

        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
}));


// const Container = styled(Box)(({theme}) => ({
//     display: 'flex',
//     [theme.breakpoints.down('md')]: {
//         display: 'block'
//     }
// }));

const Container = styled(Link)`
    display: flex;
    text-decoration: none;
    color: inherit;
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

    const {account, setAccount} = useContext(DataContext);

    const {cartItems} = useSelector(state => state.cart);

    const openDialogue = () => {
        setOpen(true);
    }

    return (
        <>
           <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} />
                :
                <LoginButton variant="contained" onClick={() => openDialogue()}>Login</LoginButton>
            }

                <Typography style={{marginTop: 3, width: 135}}>Become a Seller</Typography>
                <Typography style={{marginTop:3}}>More</Typography>

                <Container to="/cart">
                    <Badge badgeContent={cartItems?.length} color="secondary">
                        <ShoppingCart />
                    </Badge>
                    <Typography style={{marginLeft:10}}>Cart</Typography>
                </Container>
                <LoginDialogue open={open} setOpen={setOpen} />
           </Wrapper>
        </>
    )
}

export default CustomButtons;