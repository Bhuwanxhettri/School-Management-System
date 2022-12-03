const authController = require("../controllers/authController");
const router = require("express").Router();

router.post("/admin/login", authController.adminLogin);
router.post("/login", authController.login);

// router.get("/check-token", authController.checkTokenApi);

module.exports = router;