const router = require("express").Router();
const auth = require("./operations/routes/authRoute");


router.use("/auth",auth);
