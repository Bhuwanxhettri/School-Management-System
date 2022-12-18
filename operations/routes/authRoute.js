const authController = require("../controllers/authController");
const router = require("express").Router();

router.post("/admin/login", authController.adminLogin);
router.post("/sutdent/login", authController.Studentlogin);
router.post("/teacher/login", authController.Teacherlogin);


// router.get("/check-token", authController.checkTokenApi);

module.exports = router;