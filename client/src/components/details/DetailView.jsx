import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productsActions.js";

import {Box, Typography, styled} from '@mui/material';
import ActionItem from "./ActionItem.jsx";
import Grid from '@mui/material/Grid2';



const Component = styled(Box)`
    /* border: 2px solid red; */
    background: #F2F2F2;
    margin-top: 55px;
`;


const Container = styled(Grid)`
    border: 2px solid black;
    background: #FFFFFF;
    display: flex;
`;

const RightContainer = styled(Grid)`
    margin-top: 50px;
`;


const DetailView = () => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    // const insideUseParams = useParams();  //just to check
    // console.log("DATA INSIDE USE PARAMS IS : ", insideUseParams);
    
    const dispatch = useDispatch();
    const {idxx} = useParams();

    const {loading, product} = useSelector(state => state.getProductDetails);

    useEffect(() => {

        if(product && idxx !== product.id)
            dispatch(getProductDetails(idxx))

    }, [dispatch, idxx, loading, product])

    return(
        <Component>
            
                {
                    product && Object.keys(product).length &&
                    <Container container spacing={1}>

                        {/* left part */}
                        <Grid lg={4} md={4} sm={8} xs={12}>
                            <ActionItem product={product} />
                        </Grid>

                        {/* right part */}
                        <RightContainer lg={8} md={8} sm={8} sx={12}>
                            <Typography>{product.title.longTitle}</Typography>
                            <Typography style={{fontSize: 14}}>
                                8 Ratings & 1 Reviews
                                <Box component="span">
                                    hyy
                                    <img  src={fassured} style={{width:77, marginLeft: 20}} alt="fassured" />
                                </Box>
                            </Typography>
                            <Typography>
                                <Box component="span" style={{fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span" style={{color: '#878787'}}>₹<strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span" style={{color: '#388E3C'}}>{product.price.discount}</Box>
                            </Typography>
                        </RightContainer>

                    </Container>      
                }
                
            
        </Component>
    )
}

export default DetailView;