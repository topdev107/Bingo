const express = require("express")
require('express-group-routes');

const authMiddleware = require('../../middleware/auth');
const auth = require('./v1/auth');
const wallets = require('./v1/wallets');

const router = express.Router();

router.use('/auth', auth);

router.group((router) => { 

    //middleware use in group router
    //router.use(authMiddleware);   

    router.use('/wallets', wallets);
});



module.exports = router;