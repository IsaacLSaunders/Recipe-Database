const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require('./routes/record'));

const dbo = require('./db/connect');

app.listen(port, () => {
  dbo.connectToServer(function (error) {
    if (error) console.log(error);
  });

  console.log(`Server is listening on port: ${port}`);
});
