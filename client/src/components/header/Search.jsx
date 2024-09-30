import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
`;



const Search = () => {
    return (
        <>
            <SearchContainer>
                <InputSearchBase 
                placeholder='Search for products, brands and more' 

                />
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>    
            </SearchContainer>
        </>
    )
}

export default Search;