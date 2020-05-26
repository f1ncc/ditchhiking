const express = require("express");
const { config } = require("dotenv");

config();

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app @ port ${port}`);
});
