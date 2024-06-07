const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

const loginDb = mongoose.createConnection('mongodb://0.0.0.0:27017/pranavi', { useNewUrlParser: true, useUnifiedTopology: true });
loginDb.on('connected', () => console.log('MongoDB connected '));
loginDb.on('error', (err) => console.error('MongoDB connection error:', err));

const UserSchema = new mongoose.Schema({

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { 
        type: String, 
        required: true,
        enum: ['Accredite', 'Admin', 'Parent', 'Student', 'Teacher']
    }
});

const User = loginDb.model('User', UserSchema, 'signup');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/src/components')));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/src/components', 'myLogin.js'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/src/components', 'mySignup.js'));
});

app.post('/register', async (req, res) => {
    try {
        const {  email, password, role } = req.body;

     

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({  email, password: hashedPassword,role });
        await user.save();
        res.redirect('/login');
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Internal server error');
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send('Invalid email or password');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send('Invalid email or password');
        }

        res.redirect('/'); 
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).send('Internal server error');
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/src/components', 'home.js'));
});

const PORT = process.env.PORT || 3090;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
