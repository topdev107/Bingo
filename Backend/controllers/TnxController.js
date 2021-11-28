const ObjectId = require("mongodb").ObjectId;
const Tnx = require("../models/Tnx");

const algosdk = require('algosdk')
const baseServer = process.env.ALGO_SERVER_URL;
const port = "";
const token = {
    'X-API-key': process.env.PURESTAKE_API_KEY,
}

/**
 * Wait until the transaction is confirmed or rejected, or until 'timeout'
 * number of rounds have passed.
 * @param {algosdk.Algodv2} algodClient the Algod V2 client
 * @param {string} txId the transaction ID to wait for
 * @param {number} timeout maximum number of rounds to wait
 * @return {Promise<*>} pending transaction information
 * @throws Throws an error if the transaction is not confirmed or rejected in the next timeout rounds
 */
 const waitForConfirmation = async function (algodClient, txId, timeout) {
    if (algodClient == null || txId == null || timeout < 0) {
        throw new Error("Bad arguments");
    }

    const status = (await algodClient.status().do());
    if (status === undefined) {
        throw new Error("Unable to get node status");
    }

    const startround = status["last-round"] + 1;
    let currentround = startround;

    while (currentround < (startround + timeout)) {
        const pendingInfo = await algodClient.pendingTransactionInformation(txId).do();
        if (pendingInfo !== undefined) {
            if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
                //Got the completed Transaction
                return pendingInfo;
            } else {
                if (pendingInfo["pool-error"] != null && pendingInfo["pool-error"].length > 0) {
                    // If there was a pool error, then the transaction has been rejected!
                    throw new Error("Transaction " + txId + " rejected - pool error: " + pendingInfo["pool-error"]);
                }
            }
        }
        await algodClient.statusAfterBlock(currentround).do();
        currentround++;
    }
    throw new Error("Transaction " + txId + " not confirmed after " + timeout + " rounds!");
};

let TnxController = {    

    earnFreeCoins: function earnFreeCoins(req, res) {
        let algodClient = new algosdk.Algodv2(token, baseServer, port);

        (async () => {

            let params = await algodClient.getTransactionParams().do();

            //let amount = Math.floor(Math.random() * 1000);
            let amount = 1000;
            var mnemonic = "brisk inch middle fruit alert model never turn denial learn rug deal piece mail census broom real brand wrist machine boil laugh venue above program";
            var recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic);

            let txn = {
                "from": recoveredAccount.addr,
                "to": req.body.receiver_address,
                "fee": 1,
                "amount": amount,
                "firstRound": params.firstRound,
                "lastRound": params.lastRound,
                "genesisID": params.genesisID,
                "genesisHash": params.genesisHash,
                "note": new Uint8Array(0),
            };

            let signedTxn = algosdk.signTransaction(txn, recoveredAccount.sk);
            let sendTx = await algodClient.sendRawTransaction(signedTxn.blob).do();        
            
            console.log("Transaction : " + sendTx.txId);
            res.json({ 'status': 'success', 'tnx_id': sendTx.txId })

            // let tx = {
            //     'txId': sendTx.txId,
            //     'sender_address': recoveredAccount.addr,
            //     'receiver_address': req.body.receiver_address,
            //     'type': 'Earn Free Coin'
            // }
            // Tnx.create(req.body)
            //     .then((wallet) => res.json({ status: "success" }))
            //     .catch((err) => res.json(err));
        })().catch(e => {
            console.log(e);
            res.json({ 'status': 'error', 'error': e })
        });

    }
}

module.exports = TnxController;