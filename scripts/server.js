// npm server template
// in console: npm init && npm install express body-parser
// this will create package.json and node_modules

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.get("/", function (request, response) {
  response.send("Hello");
});

app.listen(port, function () {
  console.log(`Server started on localhost:${port}`);
});