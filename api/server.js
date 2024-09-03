const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const Order = require('./models/Order');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

const bcrypt = require('bcryptjs');
require('dotenv').config();

app.use(bodyParser.json());
app.use(express.static('public')); // Assuming manifest.json is in the 'public' directory


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                res.json({ message: 'success' });
            } else {
                res.status(401).json({ message: 'Incorrect password' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error });
    }
});

// User registration route
app.post('/api/awt/users', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email: email });
        if (user) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error: ' + err });
    }
});

app.post('/api/awt/Order', async (req, res) => {
    const { name, address, city, zip, card, expiry, cvv } = req.body;
    try {
        const newOrder = new Order({
            name,
            address,
            city,
            zip,
            card,
            expiry,
            cvv
        });
        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to place order' });
    }
});


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        const Port = process.env.PORT || 3000;
        app.listen(Port, () => {
            console.log(`Server is running on port ${Port}`);
        });
    })
    .catch(err => console.error(err));