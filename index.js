require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 1500
const mongoose = require("mongoose")
const order = require('./routes/orderRoute')


app.use(express.json())
app.use('/api/orders', order)

app.get('/', (req, res)=>{
    res.send('Server running')
})

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