const express = require("express");
const app = express();
const users = require("../users.json");

app.get("/", (req, res) => {
  res.json(users);
});

module.exports = app;
