import express from 'express';
const app = express();

app.route('/' , );
app.listen(process.env.PORT ,()=>{
    console.log(` Server running at port ${process.env.PORT}` );
}) ;