const express = require("express");

const app = express();
const port = 1234;

app.get("/", (req, res) => {
  res.send("Hello this is Elon Musk");
});

app.get("/wahyu", (req, res) => {
  res.send("Ini Tesla IX");
});

app.get("/wahyu", (req, res) => {
  res.send("Ini Tesla X");
});

app.get("/wahyu", (req, res) => {
  res.send("Ini Tesla XI");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
