import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import { commectDB } from "./mongodb/connectDB.js";
import postRoutes from "./routes/postRoutes.js";
import desireAI from "./routes/desireAI.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));


app.use('/api/v1/post',postRoutes);
app.use('/api/v1/desireai',desireAI);


app.get('/',async(req,res)=>{
    res.send('Hellow from DesireImage')
})

const startserver = async () =>{
    try{
        commectDB()
        app.listen(8000,()=>console.log('Server has started on port 8000'));
    }
   catch(error){
    console.log(error)
   }
}

startserver();