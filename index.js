import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send('{ "response": "Hello From fawaz" }');
});

app.get("/", (req, res) => {
  res.send('{ "response": "Hello From fawaz" }');
});

app.get("/will", (req, res) => {
  res.send('{ "response": "Hello World" }');
});

app.get("/ready", (req, res) => {
  res.send('{ "response": "Great!, It works!" }');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
