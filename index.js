const express = require("express");

const app = express();
const port = 1234;

app.get("/", (req, res) => {
  res.send("Hello this is Elon Musk");
});

app.post("/wahyu", (req, res) => {
  res.send("Ini Tesla IX");
});

app.put("/wahyu", (req, res) => {
  res.send("Ini Tesla X");
});

app.delete("/wahyu", (req, res) => {
  res.send("Ini Tesla XI");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
