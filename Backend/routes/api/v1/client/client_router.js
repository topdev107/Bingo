const express = require("express")
require('express-group-routes');

const wallets = require('./wallets');

const router = express.Router();

const ObjectId = require("mongodb").ObjectId;

router.group('/api/v1/client/', (router) => {
    router.use('/wallets/', wallets);
});



module.exports = router;