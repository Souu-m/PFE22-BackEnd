const express = require("express");
const router = express.Router();
const LiaisonController = require("../controllers/LiaisonController");

router.get("/all", LiaisonController.getAll);
router.get("/One", LiaisonController.getOne);

module.exports = router;