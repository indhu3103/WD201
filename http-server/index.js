const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can use any port you prefer

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the view engine to render HTML files
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Define a route for /registration
app.get('/registration', (req, res) => {
  res.render('registration');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
