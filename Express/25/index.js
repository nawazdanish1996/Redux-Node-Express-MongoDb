const express = require('express');
const app = express();
const port = 4500;

app.get('/', (req, res) => {
  res.send('Hello Nawaz Express started');
});

app.post('/', (req, res) => {
  res.send('raja');
});

app.put('/about', (req, res) => {
  res.send('Hello');
});

app.delete('/about', (req, res) => {
  res.send('Hi');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});