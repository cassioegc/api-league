const express = require('express');
const routes = require('./routes');

const PORT = process.env.port || 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;