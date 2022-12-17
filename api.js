const router = require("express").Router();

const auth = require("./operations/routes/authRoute");
const admin = require("./operations/routes/adminRoute")
const teacher = require("./operations/routes/teacherRoute")

router.use("/auth",auth);
router.use("/admin",admin);
router.use("/teacher",teacher)
module.exports = router;

