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
const waitForConfirmation1 = async function (algodClient, txId, timeout) {
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

// Function used to wait for a tx confirmation
const waitForConfirmation = async function (algodclient, txId) {
    let response = await algodclient.status().do();
    let lastround = response["last-round"];
    while (true) {
        const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
        if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
            //Got the completed Transaction
            console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
            break;
        }
        lastround++;
        await algodclient.statusAfterBlock(lastround).do();
    }
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

        })().catch(e => {
            console.log(e);
            res.json({ 'status': 'error', 'error': e })
        });

    },

    createNFT: function createNFT(req, res) {

        let algodClient = new algosdk.Algodv2(token, baseServer, port);

        (async () => {

            var account1_mnemonic = "brisk inch middle fruit alert model never turn denial learn rug deal piece mail census broom real brand wrist machine boil laugh venue above program";
            var account2_mnemonic = "endorse drift cost because matter tonight wait stumble label craft blouse give road tell blanket prize sad water pioneer crack culture century cycle above arrow";
            var account3_mnemonic = "annual shiver repair broken amount firm laundry timber crush balance snow wine movie poet inch rich mesh stool garbage limit include that autumn absorb mom";

            var recoveredAccount1 = algosdk.mnemonicToSecretKey(account1_mnemonic);
            var recoveredAccount2 = algosdk.mnemonicToSecretKey(account2_mnemonic);
            var recoveredAccount3 = algosdk.mnemonicToSecretKey(account3_mnemonic);

            console.log(recoveredAccount1.addr);
            console.log(recoveredAccount2.addr);
            console.log(recoveredAccount3.addr);

            let params = await algodClient.getTransactionParams().do();

            params.fee = 1000;
            params.flatFee = true;
            console.log(params);
            let note = new Uint8Array("Create new NFT");

            let addr = recoveredAccount1.addr;

            let defaultFrozen = false;

            let decimals = 0;

            let totalIssuance = 1000;

            let unitName = "BBGO";

            let assetName = "bbgo";

            let assetURL = "http://someurl";

            let assetMetadataHash = "16efaa3924a6fd9d3a4824799a4ac65d";

            let manager = recoveredAccount2.addr;

            let reserve = recoveredAccount2.addr;

            let freeze = recoveredAccount2.addr;

            let clawback = recoveredAccount2.addr;

            let txn = algosdk.makeAssetCreateTxnWithSuggestedParams(addr, note,
                totalIssuance, decimals, defaultFrozen, manager, reserve, freeze,
                clawback, unitName, assetName, assetURL, assetMetadataHash, params);

            let rawSignedTxn = txn.signTxn(recoveredAccount1.sk)
            let tx = (await algodClient.sendRawTransaction(rawSignedTxn).do());
            console.log("Transaction : " + tx.txId);
            let assetID = null;
            // wait for transaction to be confirmed
            await waitForConfirmation(algodClient, tx.txId);
            // Get the new asset's information from the creator account
            let ptx = await algodClient.pendingTransactionInformation(tx.txId).do();
            assetID = ptx["asset-index"];
            console.log("AssetID = " + assetID);

            res.json({'status': 'success', 'AssetID=': assetID})
        })().catch(e => {
            console.log(e);
            res.json({ 'status': 'error', 'error': e })
        });
    }
}

module.exports = TnxController;