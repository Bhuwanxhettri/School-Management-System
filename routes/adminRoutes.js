const express = require('express');
const router = express.Router();
const createAdmin = require("../operations/controller/adminController")
router.post('/create',createAdmin);

module.exports = router