const express = require("express")
require('express-group-routes');

const wallets = require('./client/wallets');

const router = express.Router();

router.group((router) => {
    router.use('/wallets/', wallets);
});



module.exports = router;