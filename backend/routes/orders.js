const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Order = require('../models/Order');

// Middleware to verify token and get user id
function verifyToken(req, res, next) {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
}

// Place order
router.post('/', verifyToken, async (req, res) => {
  try {
    const { products, total, shipping, method } = req.body;

    if (!products || !total || !shipping || !method) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newOrder = new Order({
      userId: req.user._id,
      products,
      total,
      shipping,
      method
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get orders of logged-in user
router.get('/', verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).populate('products.productId');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
