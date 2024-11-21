const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// For images, javascript and CSS files
app.use(express.static(path.join(process.cwd(), 'public')));

/**
 * Also HTML files could be static served by changing the links on frontend to include the '.html' at the end.
 * Each page has it's own route just for learning purposes.
 */
app.get('/', (req, res) => res.sendFile(path.join(process.cwd(), 'pages/index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(process.cwd(), 'pages/about.html')));
app.get('/contact-me', (req, res) => res.sendFile(path.join(process.cwd(), 'pages/contact-me.html')));

// File not found route (will run after everything above fails)
app.get('*', (req, res) => res.sendFile(path.join(process.cwd(), 'pages/404.html')));

// Error handling route
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('500 Internal Server Error');
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});