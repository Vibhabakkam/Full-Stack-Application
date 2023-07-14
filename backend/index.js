import  express  from "express";
const app = express();
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors"; 
import mongoose from "mongoose";
import {register, login } from './Controller/User.Controllers.js';
import { addProduct, allProducts } from "./Controller/Product.Controllers.js";
dotenv.config();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/" , (req,res) => {
     res.send("worling...");
})

// user routes
app.post("/register" , register);
app.post("/login" , login);

//product routes
app.post('/add-product', addProduct);
app.get('/all-product', allProducts);


mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("connected to DB");
}).catch((error)=>{
    console.log("Error while connection to DB" , error);
});

app.listen(8000, () => {
    console.log("server is lising on port 8000");
});
