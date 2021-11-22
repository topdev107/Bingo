const express = require("express");

const router = express.Router();

const ObjectId = require("mongodb").ObjectId;

const Wallet = require("../../../../models/Wallet");

router.post("/add", (req, res) => {
    Wallet.create(req.body)
        .then((wallet) => res.json({ status: "success" }))
        .catch((err) => res.json(err));
});

router.post("/adds", (req, res) => {
    var wallets = JSON.parse(req.body.wallets);
    var addresses = [];
    wallets.forEach((element) => {
        addresses.push(element.address);
    });

    var newWallets = [];

    Wallet.find({
        'address': { $in: addresses },
    })
        .then((docs) => {
            if (docs.length > 0) {
                var docs_addrs = [];
                docs.forEach((ele) => {
                    docs_addrs.push(ele.address);
                })

                wallets.forEach((ele) => {
                    if (!docs_addrs.includes(ele.address)) {
                        newWallets.push(ele);
                    }
                });
            } else {
                newWallets = wallets;
            }

            if (newWallets.length > 0) {
                Wallet.create(newWallets)
                    .then((wallet) => res.json({ status: "success" }))
                    .catch((err) => res.json(err));
            } else {
                res.json({ status: "success" })
            }
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;
