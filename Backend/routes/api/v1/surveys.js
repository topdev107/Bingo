const express = require("express");

const router = express.Router();

const ObjectId = require("mongodb").ObjectId;

const Survey = require("../../../models/Survey");
const SurveyFreeCoinValue = require("../../../models/SurveyFreeCoinValue");

router.put('/freecoinvalue', (req, res) => {
    SurveyFreeCoinValue.find()
        .then(data => {
            if (data.length == 0) {
                SurveyFreeCoinValue.create(req.body)
                    .then((data) => res.json({ status: "success", "data": data }))
                    .catch((err) => res.json(err));
            } else {
                SurveyFreeCoinValue.findOneAndReplace(data[0]._id, req.body)
                    .then((data) => res.json({ status: "success", "data": data}))
                    .catch((err) => res.json(err));
            }
        })
        .catch((err) => {
            res.json(err);
        })
})

router.get('/freecoinvalue', (req, res) => {
    SurveyFreeCoinValue.findOne()
        .then(data => res.json({ "status": "success", "data": data }))
        .catch(err => res.status(404).json(err));
});

router.get('/', (req, res) => {
    Survey.find()
        .then(data => res.json({ "status": "success", "data": data }))
        .catch(err => res.status(404).json(err));
});

router.get('/:id', (req, res) => {
    Survey.findById(req.params.id)
        .then(data => res.json({ "status": "success", "data": data }))
        .catch(err => res.status(404).json(err));
});

router.post("/add", (req, res) => {
    Survey.create(req.body)
        .then((data) => res.json({ status: "success", "data": data }))
        .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
    Survey.findByIdAndRemove(req.params.id)
        .then(data => res.json({ status: "success", "data": data }))
        .catch(err => res.json(err));
});

router.put('/:id', (req, res) => {
    Survey.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.json({ status: "success", "data": data }))
        .catch(err => res.json(err));
});

module.exports = router;
