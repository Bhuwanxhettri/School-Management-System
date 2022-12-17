const {CreateTeacher, UpdateTeacher} = require('../controllers/teacherController')
const router = require("express").Router();
router.post("/create",CreateTeacher);
router.patch("/update",UpdateTeacher);
module.exports = router;
