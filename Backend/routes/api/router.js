const express = require("express")
require('express-group-routes');

const authMiddleware = require('../../middleware/auth');
const auth = require('./v1/auth');
const wallets = require('./v1/wallets');
const tnxs = require('./v1/tnxs')
const surveys = require('./v1/surveys')
const metamask = require('./v1/metamask')

const router = express.Router();

router.use('/auth', auth);

router.group((router) => { 

    //middleware use in group router
    //router.use(authMiddleware);   

    router.use('/wallets', wallets);
    router.use('/tnxs', tnxs);
    router.use('/surveys', surveys);
    router.use('/metamask', metamask);
});



module.exports = router;