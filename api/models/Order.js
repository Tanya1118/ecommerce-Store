const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    card: {
        type: String,
        required: true
    },
    expiry: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;