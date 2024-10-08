import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productsActions.js";

import {Box, Typography, styled} from '@mui/material';
import ActionItem from "./ActionItem.jsx";
import Grid from '@mui/material/Grid2';
import ProductDetail from "./ProductDetail.jsx";


const Component = styled(Box)`
    /* border: 2px solid red; */
    background: #F2F2F2;
    margin-top: 55px;
`;


// const Container = styled(Grid)`
//     /* border: 2px solid black; */
//     background: #FFFFFF;
//     display: flex;
// `;


const Container = styled(Grid) ( ({theme}) => ({
    /* border: 2px solid black; */
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}) ); 


const RightContainer = styled(Grid)`
    margin-top: 50px;
`;


const DetailView = () => {

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
                        <RightContainer lg={8} md={8} sm={8} xs={12}>
                            <ProductDetail product={product} />
                        </RightContainer>

                    </Container>      
                }
                
            
        </Component>
    )
}

export default DetailView;