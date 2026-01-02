const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    items: [
{
    name: {
        type: String,
        enum: ["Waffle with Berries", "Vanilla Bean Crème Brûlée", "Macaron Mix of Five", "Classic Tiramisu", "Pistachio Baklava", "Lemon Meringue Pie", "Red Velvet Cake", "Salted Caramel Brownie", "Vanilla Panna Cotta"],
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        min: 11,
        max: 11
    },
}, 
    ],

    totalAmount: {
        type: Number,
        required: true
    },

    scheduledDate: 
    { type: Date }, 

    createdAt: {
        type: Date,
        default: Date.now
    },
    
});



    

module.exports = mongoose.model("Order", orderSchema)