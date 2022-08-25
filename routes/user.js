const express = require("express");
const app = express();
const users = require("../users.json");
const { body, validationResult } = require("express-validator");
const slugify = require("slugify");

// une route qui renvoie tous les users
app.get("/", (req, res) => {
  res.json(users);
});

// une route qui pour 1 user grace au slug

app.get("/:slug", (req, res) => {
  const { slug } = req.params;

  const user = users.find((user) => {
    return slug === user.slug;
  });

  if (user) {
    res.json(user);
  } else {
    res.status(404).json("not found");
  }
});

// Une route qui crée un user

app.post(
  "/new-user",
  body("name").isLength({ min: 4 }),
  body("password")
    .exists()
    .isLength({ min: 8 })
    .withMessage("error: you pw less than 8"),
  body("city")
    .exists()
    .isIn(["Paris", "Tokyo", "Los Angeles"])
    .withMessage("Invalide city"),
  body("email").exists().isEmail().withMessage("Invalid email"),
  (req, res) => {
    const { errors } = validationResult(req);
    console.log(errors);
    const user = {
      ...req.body,
      slug: slugify(req.body.name, { lower: false }),
    };

    if (errors.length > 0) {
      res.status(400).json(errors);
    } else {
      res.json(req.body);
    }

    users.push(user);
    res.json(user);
  }
);

module.exports = app;
