import express from 'express';
import authRouter from './routes/authRouter';
const app = express();

app.use('/api/users' , authRouter);

app.listen(process.env.PORT ,()=>{
    console.log(` Server running at port ${process.env.PORT}` );
}) ;