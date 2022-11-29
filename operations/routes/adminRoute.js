const express = require('express');
const router = express.Router();
const {createAdmin,editHOD} = require("../controllers/adminController")
router.post('/create',createAdmin);
router.put("/edithod/:user_name",editHOD)
module.exports = router