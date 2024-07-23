import express from 'express';

const app = express();
app.use(express.json());

app.use("/api/train" , trainRouter);

app.listen(process.env.PORT , ()=>{
    console.log(`The server has started at ${process.env.PORT}`);
})