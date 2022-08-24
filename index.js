const express = require("express");
const app = express();
const port = 5000;
const morgan = require("morgan");
const cors = require("cors");
const usersRoutes = require("./routes/user");
const { ContextRunnerImpl } = require("express-validator/src/chain");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${5000}`);
});

module.exports = app;
