const express = require("express");

const router = express.Router();

const ObjectId = require("mongodb").ObjectId;

const Survey = require("../../../models/Survey");
const Metamask = require("../../../models/Metamask");


router.post("/add", (req, res) => {
    Metamask.create(req.body)
        .then((data) => res.json({ status: "success", "data": data }))
        .catch((err) => res.json(err));
});

router.get('/', (req, res) => {
    Metamask.find()
    .then(data => res.json({"status": "success", "count": data.length, "data": data}))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
