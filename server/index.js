import express from 'express';
import Connect from './database/db.js';
import 'dotenv/config';

const app = express();


app.get("/", (req,res) => {
    res.send("Welcome to Home Page")
});


const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connect(USERNAME, PASSWORD)

// creating express server
app.listen(PORT, () => {
    console.log(`Server Started Successfully on PORT ${PORT}`);
    
})