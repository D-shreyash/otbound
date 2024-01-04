const express = require("express")
const router = express.Router();

const{createUser} = require("../controllers/createUser");

const{signUser} = require("../controllers/signUser");

const{googleAuthRoute} = require("../controllers/googleAuth");

router.post("/signup",createUser);
router.post("/signin",signUser);
router.post("/gooleAuth",googleAuthRoute);

module.exports = router;