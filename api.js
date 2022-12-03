const router = require("express").Router();

const auth = require("./operations/routes/authRoute");
const admin = require("./operations/routes/adminRoute")


router.use("/auth",auth);
router.use("/admin",admin);

module.exports = router;

