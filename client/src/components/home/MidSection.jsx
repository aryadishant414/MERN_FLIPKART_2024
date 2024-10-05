import { imageURL } from "../../constants/data.js";
import { Hidden, styled } from "@mui/material";
import Grid from '@mui/material/Grid2';

const Wrapper = styled(Grid)`
    /* border: 2px solid red; */
    margin-top: 10px;
    /* justify-content: space-between; */
`;

// const Image = styled('img')({
//     marginTop: 10,
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'space-between'
// })
//We have commented this coz we want responsive layout so we are using material UI Theme to make it responsive

const Image = styled('img') (({theme}) => ({
    marginTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    
    // responsive
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));


const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return(
        <>
            <Wrapper container spacing={1} >
                {
                  imageURL.map(eachImage => (
                    <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
                        <img src={eachImage} alt="image" style={{width: '100%'}} />
                    </Grid>
                  ))  
                }        
            </Wrapper>
            <Image src={url} alt="covid" />
        </>
    )
}

export default MidSection;