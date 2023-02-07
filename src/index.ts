import express from "express";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();

const app = express();

const { PORT } = process.env;


app.use('/v1', router);

app.use(express.json);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})