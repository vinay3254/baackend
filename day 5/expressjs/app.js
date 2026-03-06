const express = require("express");

const app = express();

app.use(express.json());

// GET
app.get("/users", (req, res) => {
  res.send("Here is the users list");
});

// POST
app.post("/users", (req, res) => {
  const user = req.body;
  res.send(`User ${user.name} added successfully`);
});

// PUT
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User with ID ${id} updated`);
});

// DELETE
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User with ID ${id} deleted`);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});