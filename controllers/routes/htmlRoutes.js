const express = require("express");
const router = express.Router();
const path = require("path");

// index.html

router.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "../..public/index.html"));
});
// exercise html
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(_dirname, "../..public/exercise.html"));
});
// statspage html
router.get("/stats", (req, res) => {
    res.sendFile(path.join(_dirname, "../..public/stats.html"));
});

module.exports = router;
