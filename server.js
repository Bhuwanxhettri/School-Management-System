const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")
const bodyParser = require('body-parser')
const db = require("./DB/connection")
require('dotenv').config();
app.use(bodyParser.json());
app.use(cors());

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})