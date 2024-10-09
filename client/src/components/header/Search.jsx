import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productsActions.js';
import {Link} from 'react-router-dom';


const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
    /* border: 2px solid black; */
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    /* border: 2px solid black; */
    font-size: unset;

`;

const SearchIconWrapper = styled(Box)`
    /* border: 2px solid red; */
    color: blue;
    padding: 5px;
    display: flex;
`;


const ListWrapper = styled(List)`
    /* border: 2px solid black; */
    position: absolute;
    color: #000;
    background: #FFFFFF;
    margin-top: 36px;
`;


const Search = () => {

    const [text, setText] = useState('');

    // fetching data from Redux store
    const {products} = useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])



    const getText = (text) => {
        setText(text);
    }

    return (
        <>
            <SearchContainer>
                <InputSearchBase 
                placeholder='Search for products, brands and more' 
                onChange={(e) => getText(e.target.value)}
                value={text}
                />
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                {
                    text &&
                        <ListWrapper>
                            {
                                products.filter(eachProduct => eachProduct.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(eachProduct => (
                                    <ListItem>
                                        <Link to={`/product/${eachProduct.id}`}
                                        onClick={() => setText('')}
                                        style={{ textDecoration: 'none', color: 'inherit'}}
                                        >
                                            {
                                                eachProduct.title.longTitle
                                            }
                                        </Link>
                                    </ListItem>
                                ))
                            }
                        </ListWrapper>
                }    
            </SearchContainer>
        </>
    )
}

export default Search;
// 