const express = require('express');
const path = require('path');
const minimist = require('minimist');

const app = express();
const argv = minimist(process.argv.slice(2)); // Parse command line arguments

const port = argv.port || 3000; // Use the supplied port or default to 3000

// Set the views directory
app.set('views', path.join(__dirname, 'http-server'));

// Set the view engine to render HTML files
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Define a route for /registration
app.get('/registration', (req, res) => {
  res.render('registration');
});

// Define other routes as needed

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

