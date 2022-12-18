const {CreateGroup, GetGroup} = require("../controllers/groupController")
const router = require("express").Router();
router.get("/:id",GetGroup);
router.post("/create",CreateGroup);
// router.patch("/update",UpdateTeacher);
module.exports = router;