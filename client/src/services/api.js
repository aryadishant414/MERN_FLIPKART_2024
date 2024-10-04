import axios from 'axios';


const URL = "http://localhost:8000";

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/api/v1/auth/signup`, data);
    } catch (error) {
        console.log("Error while sending Signup data from Frontend/Client-Side", error);
    }
}

export const authenticateLogin = async(data) => {
    try {
        return await axios.post(`${URL}/api/v1/auth/login`, data);
    } catch (error) {
        console.log("Error while sending Login User data from Frontend/Client-Side", error);
        return error.message;
    }
}