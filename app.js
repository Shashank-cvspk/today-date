const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  response.send(`${date.getDay()}-${date.getMonth()+1}-${date.getFullYear()}`);
});

app.listen(3000);
module.exports = app;
