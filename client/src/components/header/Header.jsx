import {AppBar, Toolbar, styled, Box, Typography} from '@mui/material';


//components
import Search from './Search.jsx';
import CustomButtons from './CustomButtons.jsx';


const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;

`;

const Component = styled(Box)`
    margin-left: 12%;
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

const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`;


const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <>
            <StyledHeader>
                <Toolbar style={{minHeight: 54}}>
                    <Component>
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