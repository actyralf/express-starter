require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { rootHandler } = require("./handlers/root");

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get("/", rootHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
