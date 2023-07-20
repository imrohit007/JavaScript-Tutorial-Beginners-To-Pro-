
/*const http = require('http');

const server = http.createServer((req, res) => {
    // logging middleware
    console.log(`Received request for ${req.url}`);


    if (req.url === '/') {
        res.end('This is the root endpoint');
    } else if (req.url === '/users') {
        // handle the users endpoint
        res.end('This is the users endpoint')
    } else if (req.url === '/products') {
        // handle the products endpoint
        res.end('This is the products endpoint');
    } else {
        // handle the endpoints or returns a 404 response
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page not found')
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});*/
/*
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true});

// Defining a mongoose schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// creating a mongoose model
const User = mongoose.model('User', userSchema);

// saving a new document  to the database
const newUser = new User({
    name: 'John Doe',
    email: 'johndoe@example.com',
    age:25
});

newUser.save()
    .then(() => console.log('User saved successfully'))
    .catch(err => console.error('Error saving user', err));
*/

const express = require('express');
const app = express();

// Implementing authentication middleware
const authenticationUser = (req, res, next) => {
    // Assume the user is authenticated for simplicity
    console.log('User Authenticated');
    next();
};

app.get('/dashboard', authenticationUser, (req, res) => {
    res.send('Welcome to the dashboard!')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})