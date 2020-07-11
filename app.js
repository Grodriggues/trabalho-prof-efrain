const express = require("express");
const app = express();
const path = require("path");
const public = path.join(__dirname, "./public");

app.use(express.static(public));

app.listen(3000, () => console.log("running"));
