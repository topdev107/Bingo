const express = require("express");

const router = express.Router();

const ObjectId = require("mongodb").ObjectId;

const Wallet = require("../../../../models/Wallet");

router.post('/add', (req, res) => {
    Wallet.create(req.body)
        .then(wallet => res.json(wallet))
        .catch(err => res.json(err));
});

module.exports = router;
