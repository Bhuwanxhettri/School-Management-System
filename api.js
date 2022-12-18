const router = require("express").Router();

const auth = require("./operations/routes/authRoute");
const admin = require("./operations/routes/adminRoute")
const teacher = require("./operations/routes/teacherRoute")
const group = require("./operations/routes/groupRoute")
router.use("/auth",auth);
router.use("/admin",admin);
router.use("/teacher",teacher)
router.use("/group",group)

module.exports = router;

