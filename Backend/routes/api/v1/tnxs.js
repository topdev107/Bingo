const express = require("express");

const router = express.Router();

const ObjectId = require("mongodb").ObjectId;

const Tnx = require("../../../models/Tnx");
const TnxController = require("../../../controllers/TnxController")

router.post("/earn_free_coins", TnxController.earnFreeCoins);
router.post("/createNFT", TnxController.createNFT);

module.exports = router;
