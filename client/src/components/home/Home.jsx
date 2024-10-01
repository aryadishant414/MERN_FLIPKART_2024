//components
import NavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";
import { Box, styled } from "@mui/material";


const Component = styled(Box)`
    /* border: 2px solid red; */
    padding: 10px;
    background: #F2F2F2;
`;

const Home = () => {
    return (
        <>
            <NavBar />
 
            <Component>
                <Banner />
            </Component>
        </>
    )
};

export default Home;