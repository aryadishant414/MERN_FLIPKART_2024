import {AppBar, Toolbar, styled, Box, Typography, IconButton, Drawer, List, ListItem} from '@mui/material';

import {Menu} from '@mui/icons-material';

//components
import Search from './Search.jsx';
import CustomButtons from './CustomButtons.jsx';
import { Link } from 'react-router-dom';

import { useState } from 'react';

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;

`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
    /* border: 2px solid black; */
`;

const SubHeading = styled(Typography)`
    /* border: 2px solid red; */
    font-size: 10px;
    font-style: italic;
`;

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomButtonWrapper = styled(Box)(({theme}) => ({
    // border: '2px solid red',
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MenuButton = styled(Menu)  (({theme}) => ({
    display: 'none',
    [theme.breakpoints.down('md')] : {
        display: 'block'
    }
}));

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setOpen]= useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <>
            <StyledHeader>
                <Toolbar style={{minHeight: 54}}>
                <IconButton color='inherit' onClick={handleOpen}>
                    <MenuButton />
                </IconButton>
                <Drawer open={open} onClose={handleClose}>
                    <Box>
                        <List>
                            <ListItem>
                                <CustomButtons />
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
                    <Component to='/'>
                        <img src={logoURL} alt='Flipcart-Logo' style={{width: 75}}/>
                        <Box style={{display: 'flex'}}>
                        <SubHeading>
                            Explore&nbsp;
                            <Box component="span" style={{color: '#FFE500' }}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="Plus-Image" />
                        </Box>
                    </Component>
                    <Search />


                    <CustomButtonWrapper>
                        <CustomButtons />
                    </CustomButtonWrapper>
                </Toolbar>
            </StyledHeader>
        </>
    )
};

export default Header;