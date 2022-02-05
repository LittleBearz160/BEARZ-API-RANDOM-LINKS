const router = require("express").Router();
const { getLink1 } = require("../controllers/img");
const { getLink2 } = require("../controllers/img2");
const { home } = require("../controllers/home");

router.get("/img", getLink1);
router.get("/img2", getLink2);
router.get("/", home);

module.exports = router;