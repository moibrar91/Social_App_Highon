const express = require('express');
const app = express();
const port = 3000; // Change this port as needed

// Sample posts data for demonstration
const postsData = [
  // Same data as in the frontend example
];

// Middleware to parse JSON body for POST requests
app.use(express.json());

// Route to fetch all posts
app.get('/api/posts', (req, res) => {
  res.json(postsData);
});

// Route to create a new post
app.post('/api/posts', (req, res) => {
  const newPost = req.body;
  // Add validation and data handling logic here
  // For simplicity, we'll assume the new post is valid and add it to the postsData array
  postsData.push(newPost);
  res.status(201).json({ message: 'Post created successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
