require("dotenv").config()
const express = require("express")
const app = express()
const cors = require('cors');
const PORT = process.env.PORT || 1500
const mongoose = require("mongoose")
const order = require('./routes/orderRoute')


const corsOptions = {
  origin: 'http://localhost:5173', // Allow only your frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  credentials: true // If you are sending cookies or authorization headers
};

app.use(cors(corsOptions));
app.use(express.json())
app.use('/api/orders', order)

app.get('/api/orders', (req, res) => {
  res.json({ message: 'Orders data from the backend!' });
});

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(PORT, ()=>{
            console.log(`server is working on port ${PORT}`);
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

startServer()