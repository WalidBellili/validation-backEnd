const express = require("express");
const app = express();
const users = require("../users.json");
const { checkIfExists } = require("../middlewares/user");

// une route qui renvoie tous les users
app.get("/", (req, res) => {
  res.json(users);
});

// une route qui pour 1 user grace au slug

app.get("/:slug", checkIfExists, (req, res) => {
  console.log(req.user);
});

// Une route qui crée un user

app.post("/new-user", (req, res) => {
  console.log("ok");
});

module.exports = app;
