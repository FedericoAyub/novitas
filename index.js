const express = require('express');
const port = process.env.PORT || 6000;
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('novitas');
});
app.listen(port);