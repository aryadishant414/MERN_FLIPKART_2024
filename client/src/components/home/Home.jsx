//components
import NavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { getProducts } from "../../redux/actions/productsActions.js";
import { useSelector } from "react-redux";

const Component = styled(Box)`
    /* border: 2px solid red; */
    padding: 10px;
    background: #F2F2F2;
`;

const Home = () => {

    const {products} = useSelector(state => state.getProducts);  // this 'getProducts' contains all the data that the Redux Store Contains like 
    console.log("PRODUCST INSIDE REDUX STORE ARE : ", products);
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    } , [dispatch])

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