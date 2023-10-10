require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express API" });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
