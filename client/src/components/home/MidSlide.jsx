//This slide is the first slide jisme right side mai choti si flipkart ki add bhi hai
// thats why iska alg sai component banaya hai


import { Box, styled} from "@mui/material";
import Slide from "./Slide.jsx";


const Component = styled(Box)`
    display: flex;
`;

// (({theme}) => ({  }))

const LeftComponent = styled(Box) (({ theme }) => ({ 
    width: '83%',

    // responsive
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
 }));

// const RightComponent = styled(Box)`
//     background: #FFFFFF;
//     padding: 5px;
//     margin-top: 10px;
//     margin-left: 10px;
//     width: 17%;
//     text-align: center;
//     /* border: 2px solid black; */
// `;
//We have commented this coz we want responsive layout so we are using material UI Theme to make it responsive


const RightComponent = styled(Box) ( ( {theme} ) => ({
    background: '#FFFFFF',
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
    width: '17%',
    textAlign: 'center',
    /* border: 2px solid black; */

    // responsive
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));




const MidSlide = ({products, title, timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
            <Component>
                <LeftComponent>
                    <Slide products={products} title={title} timer ={timer} />
                </LeftComponent>
                <RightComponent>
                    <img src={adURL} alt="ad" style={{width: 217}} />
                </RightComponent>
            </Component>    
    )
}

export default MidSlide;

