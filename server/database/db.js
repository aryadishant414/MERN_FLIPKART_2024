import mongoose from 'mongoose';

const Connect = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.sejlsni.mongodb.net/ecommerce_2024?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL);
        console.log("Database Connected Successfully");
        
    } catch (error) {
        console.log("Error while connecting to Database", error.message);
        
    }
}

export default Connect;