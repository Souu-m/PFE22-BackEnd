const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
	db.Users.findAll().then((users) => res.send(users));
});

module.exports = router;
