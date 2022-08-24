const users = require("../users.json");

const checkIfExists = (req, res, next) => {
  const { slug } = req.params;

  const user = users.find((user) => {
    return slug === user.slug;
  });

  if (user) {
    req.user = user;

    next();
  } else {
    res.status(404).json("user not found");
  }
};

module.exports = {
  checkIfExists,
};
