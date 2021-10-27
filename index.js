const express = require('express');

const PORT = process.env.port || 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(config.port, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;