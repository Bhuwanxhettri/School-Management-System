const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')
const { connect } = require('./DB/connection');
// const adminRoute = require('./routes/adminRoutes')
const api = require('./api')

require('dotenv').config();
app.use(bodyParser.json());
app.use(cors());

connect(); //databse Connection



// routes api
app.use("/api", api)








// routes
// app.use('/admin',adminRoute);
// app.use('/hod',)

app.listen(process.env.PORT, () => {
  console.log(` app listening on port ${process.env.PORT}`)
})