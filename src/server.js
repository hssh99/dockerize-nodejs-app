const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the Server!");
});

app.listen(3000, function () {
  console.log("app is listening on port 3000");
});
