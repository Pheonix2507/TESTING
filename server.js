const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { clear } = require('console');

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., CSS) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the login page
app.get('/', (req, res) => {
    res.render('login');
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Log the user credentials to the server console
    console.log(`Username: ${username}, Password: ${password}`);

    // After login, you can either send a success page or redirect back to the login page
    res.send('Login details received and logged on the server!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
