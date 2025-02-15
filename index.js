import express from "express";
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send('{ "response": "Hello From fawaz" }');
});

app.get("/test", (req, res) => {
  res.send('{ "response": "welcome" }');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
