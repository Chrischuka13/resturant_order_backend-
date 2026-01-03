const Order = require("../models/orderSchema")
const express = require("express")
const router = express.Router()


router.post("/", async (req, res) => {
    try {
    const { cartItems } = req.body;

    // Validate items
    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    // Validate each item
    for (const item of cartItems) {
      if (
        !item.name ||
        typeof item.price !== "number" ||
        typeof item.quantity !== "number" ||
        item.quantity < 1
      ) {
        return res.status(400).json({
          message: "Invalid item data",
        });
      }
    }

    // Tell Server to recalculate total (IMPORTANT)
    const totalAmount = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Tell Server to create order
    const order = await Order.create({
      cartItems,
      totalAmount,
    });

    // Server Response
    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({
      message: "Failed to create order",
    });
  }
});

module.exports = router
