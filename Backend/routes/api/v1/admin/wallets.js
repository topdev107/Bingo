const express = require("express");

const router = express.Router();

const ObjectId = require("mongodb").ObjectId;

const Wallet = require("../../../../models/Wallet");

router.get('/', (req, res) => {
    Wallet.find()
    .then(wallets => res.json(wallets))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
