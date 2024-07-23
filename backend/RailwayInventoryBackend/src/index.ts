import express from 'express';
import trainRouter from './routes/trainRouter';
const app = express();
app.use(express.json());

app.use("/api" , trainRouter);

app.listen(process.env.PORT , ()=>{
    console.log(`The server has started at ${process.env.PORT}`);
})