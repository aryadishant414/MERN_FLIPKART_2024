import {navData} from '../../constants/data.js'
import { Box, styled, Typography } from '@mui/material';

const Component = styled(Box)`
    display: flex;
    margin: 55px 130px 0 130px;
    justify-content: space-between;
`;

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
    )
};

export default NavBar;