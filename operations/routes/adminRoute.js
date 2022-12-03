const express = require('express');
const router = express.Router();
const {create,editHOD} = require("../controllers/adminController")


router.post('/create',create);
router.put("/edithod/:user_name",editHOD)
module.exports = router