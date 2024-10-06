import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productsActions.js";

const DetailView = () => {

    // const insideUseParams = useParams();  //just to check
    // console.log("DATA INSIDE USE PARAMS IS : ", insideUseParams);
    
    const dispatch = useDispatch();
    const {idxx} = useParams();

    useEffect(() => {
        dispatch(getProductDetails(idxx))
    }, [dispatch, idxx])

    return(
        <>
            <h1>Welcome to details component</h1>
        </>
    )
}

export default DetailView;