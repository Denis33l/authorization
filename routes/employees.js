const express = require('express');
const router = express.Router();
const { add, remove, all } = require("../controllers/employees");
const { auth } = require('../middleware/auth');

router.get("/", auth, all);
router.post("/add", auth, add);
router.post("/remove/:id", auth, remove);

module.exports = router;