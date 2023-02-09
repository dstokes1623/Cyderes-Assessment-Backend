import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();

const app = express();

const { PORT } = process.env;

const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 };

 app.use(cors(corsOptions));

app.use('/v1', router);

app.use(express.json);


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});