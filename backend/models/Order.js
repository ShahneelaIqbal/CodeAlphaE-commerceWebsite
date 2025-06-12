const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true }
    }
  ],
  total: { type: Number, required: true },
  shipping: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }
  },
  method: { type: String, enum: ['cod', 'bank'], required: true }, // cod = Cash on Delivery, bank = Stripe
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
