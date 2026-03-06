const express = require("express");

const app = express();

// Built-in middleware to parse JSON
app.use(express.json());

// Custom middleware (runs before routes)
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

// GET route
app.get("/users", (req, res) => {
  res.send("Fetching all users");
});

// POST route
app.post("/users", (req, res) => {
  const user = req.body;
  res.send(`User ${user.name} created successfully`);
});

// PUT route
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User with ID ${id} updated`);
});

// DELETE route
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User with ID ${id} deleted`);
});

// Route to trigger error
app.get("/error", (req, res, next) => {
  const err = new Error("Something went wrong!");
  next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send(`Error: ${err.message}`);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});