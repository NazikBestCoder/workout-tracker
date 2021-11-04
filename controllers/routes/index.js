const router = require("express").Router();
// 3,4
const htmlRoutes = require("./htmlRoutes.js");
const apiRoutes = require("./apiRoutes.js");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;
