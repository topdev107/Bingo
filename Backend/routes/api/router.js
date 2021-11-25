const express = require("express")
require('express-group-routes');

const wallets = require('./v1/wallets');

const router = express.Router();

router.group((router) => {
    router.use('/wallets/', wallets);
});



module.exports = router;