import express from 'express';
import Connect from './database/db.js';
import 'dotenv/config';
import { DefaultData } from './default.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

var corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  }

app.use(cors(corsOptions));

// bodyparser is a middleware
//below two lines are responsible to handle the incoming requests that are coming inside backend (Without these two lines our requests on backend will not be able to handle)
app.use(bodyParser.json({extended: true}));  //with the help of this line backend understands the JSON data and easily process it
app.use(bodyParser.urlencoded({extended: true}));

// user Authentication
app.use("/api/v1/auth", Router);


const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connect(USERNAME, PASSWORD)

// creating express server
app.listen(PORT, () => {
    console.log(`Server Started Successfully on PORT ${PORT}`);
    
})

DefaultData();