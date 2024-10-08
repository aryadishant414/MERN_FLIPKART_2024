import Dialog from '@mui/material/Dialog';
import { Box, TextField, Typography, Button, styled} from '@mui/material';
import { useState } from 'react';
import { authenticateSignup, authenticateLogin } from '../../services/api.js';
import { DataContext } from '../../context/DataProvider.jsx';
import { useContext } from 'react';


const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 28%;
    height: 83%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600;
    }
    /* border: 2px solid red; */
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 14px;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 12px;
    cursor: pointer

`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
}

const loginInitialValues = {
    username: '',
    password: '',
}




const LoginDialogue = ({open, setOpen}) => {
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);

    /*accesing below values from context api */
    const {setAccount} = useContext(DataContext);

    const onInputChange = (e) => {
        /* console.log("Printing Event", e.target.value); */
        setSignup({...signup, [e.target.name] : e.target.value });
        /* console.log(signup); */
    }

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name] : e.target.value});
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login)
        setError(false);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const signupUser = async (e) => {
    /* console.log("USER Submitted Data is :",signup); */
        const response = await authenticateSignup(signup);
        if(!response) return ;

        /* console.log("Signup Response from Backend is : ",response); */

        handleClose();
        setAccount(signup.firstname);
    }

    const loginUser = async() => {
        const response = await authenticateLogin(login);

        console.log("Data recived from backend on User Login is :" , response);

        /*check */
        if(response.status === 200) {
        handleClose();
        setAccount(response.data.user.firstname);  
        } else {
            setError(true);
        }
  

    }

    return (
        <>
            <Dialog  open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
                <Component>
                    <Box style={{display: 'flex', height: '100%'}}>
                        <Image>
                            <Typography variant="h5">{account.heading}</Typography>
                            <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                        </Image>

                        {
                            account.view === 'login' ?
                            (
                            <Wrapper>
                                <TextField variant="standard" name='username' onChange={(e) => onValueChange(e)} label="Enter username" />
                                
                                {error && <Error>Please enter valid username or password</Error>}
                                <TextField variant="standard" name='password' onChange={(e) => onValueChange(e)} label="Enter Password" />
                                
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton onClick={() => loginUser()} >Login</LoginButton>
                                <Typography style={{textAlign:'center'}}>OR</Typography>
                                <RequestOTP>Request OTP</RequestOTP>
                                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                            </Wrapper> 
                            )
                        :
                            (
                            <Wrapper>
                                <TextField variant="standard" name='firstname' onChange={(e) => onInputChange(e)} label="Enter Firstname" />
                                <TextField variant="standard" name='lastname' onChange={(e) => onInputChange(e)} label="Enter Lastname" />
                                <TextField variant="standard" name='username' onChange={(e) => onInputChange(e)} label="Enter Username" />
                                <TextField variant="standard" name='email' onChange={(e) => onInputChange(e)} label="Enter Email" />
                                <TextField variant="standard" name='password' onChange={(e) => onInputChange(e)} label="Enter Password" />
                                <TextField variant="standard" name='phone' onChange={(e) => onInputChange(e)} label="Enter Phone" />
                                <LoginButton onClick={() => {signupUser()}}>Continue</LoginButton>
                            </Wrapper>
                            )
                        }
                        
                    </Box>
                </Component>
            </Dialog>
        </>
    )
}

export default LoginDialogue;