import {AppBar, Toolbar, styled } from '@mui/material';




const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;

`;


const Header = () => {
    return (
        <>
            <StyledHeader>
                <Toolbar>
                
                </Toolbar>
            </StyledHeader>
        </>
    )
};

export default Header;