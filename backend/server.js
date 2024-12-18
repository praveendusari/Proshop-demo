import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5000;

const app=express();
app.get('/',(req,res)=>{
    res.send('Server is ready');
});

app.get('/api/products',(req,res)=>{
    res.json(products);
});

app.get('/api/products/:id',(req,res)=>{
    console.log(req.params.id);
    const product = products.find((p)=>p._id === parseInt(req.params.id));
    res.json(product);
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});