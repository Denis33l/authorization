const express = require('express');
const router = express.Router();
const { add, remove, all, comment } = require("../controllers/comments");
const { auth } = require('../middleware/auth');

router.get("/", auth, all);
router.get("/:id", auth, comment);
router.post("/add", auth, add);
router.post("/remove/:id", auth, remove);

module.exports = router;