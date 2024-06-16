const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 8000;

// Set the views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware for parsing URL-encoded and JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Handle the login form submission
app.post('/login', (req, res) => {
    const user = req.body.username;
    const pass = req.body.password;

    if (user === 'Swetha' && pass === '2003') {
        res.render('success', { username: user });
    } else {
        res.render('unauthorized');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
