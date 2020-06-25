const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('novitas');
});
app.listen(6000);