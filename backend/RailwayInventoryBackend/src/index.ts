import express from 'express';
import mongoose from 'mongoose';
import trainRouter from './routes/trainRouter';
const app = express();
app.use(express.json());

app.use("/api" , trainRouter);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('listening on port ' , process.env.PORT);
    })
})
.catch((err)=>{
    console.log(err);
})