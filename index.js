const express = require("express");
const app = express();
const port = 5000;
const usersRoutes = require("./routes/user");

app.use(express.json());

app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${5000}`);
});

module.exports = app;
