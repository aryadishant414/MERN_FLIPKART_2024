//components
import NavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { getProducts } from "../../redux/actions/productsActions.js";
import { useSelector } from "react-redux";
import Slide from "./Slide.jsx";
import MidSlide from "./MidSlide.jsx";
import MidSection from './MidSection.jsx';

const Component = styled(Box)`
    /* border: 2px solid red; */
    padding: 10px;
    background: #F2F2F2;
`;

const Home = () => {

    const {products} = useSelector(state => state.getProducts);  // this 'getProducts' contains all the data that the Redux Store Contains
    // console.log("PRODUCST INSIDE REDUX STORE ARE : ", products);
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    } , [dispatch])

    return (
        <>
            <NavBar />
 
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer ={true}/>
                <MidSection />
                <Slide products={products} title="Discounts for You" timer ={false} />
                <Slide products={products} title="Suggested Items" timer ={false} />
                <Slide products={products} title="Top Collections" timer ={false} />
                <Slide products={products} title="Recommended Items" timer ={false} />
                <Slide products={products} title="Trending Offers" timer ={false} />
                <Slide products={products} title="Season's top picks" timer ={false} />
                <Slide products={products} title="Top Deals on Accessories" timer ={false} />
            </Component>
        </>
    )
};

export default Home;