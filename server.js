const express = require("express");
const app = express();
app.use((req, res, next) => {
  const now = new Date();
  console.log(`Request received at: ${now.toLocaleString()}`);
  next();
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

