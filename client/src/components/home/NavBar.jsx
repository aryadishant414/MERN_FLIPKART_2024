import {navData} from '../../constants/data.js'
import { Box, styled, Typography } from '@mui/material';

const Component = styled(Box) (({theme}) => ({ 
    display: 'flex',
    margin: '55px 130px 0 130px',
    justifyContent: 'space-between',
    
    // overflow: 'overlay',  // navbar ke items par ekk scroll-bar aa jaaega
    overflow: 'hidden', // this will hide the by default scroll bar on our whole screen

    // responsive
    [theme.breakpoints.down('lg')]: {
        margin: 0
    }
 }));
    


const Container = styled(Box)`
    /* border: 2px solid red; */
    padding: 12px 8px;
    text-align: center;
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const NavBar = () => {
    return (
        <Box style={{background: '#fff'}}>
            <Component>
                {
                    navData.map(data => (
                        <Container>
                            <img src={data.url} alt="HomeNavImg" style={{width: 64}} />
                            <Text>{data.text}</Text>
                        </Container>
                    ))
                }
            </Component>
        </Box>
    )
};

export default NavBar;