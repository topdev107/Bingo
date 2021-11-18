/* global AlgoSigner */
import React from 'react'
import ConnectButton from '../../sub_components/ConnectButton';
import Swal from "sweetalert2";
import { useState, useCallback } from "react";

const ConnectWallet = () => {

    const connectWalletHandleClick = useCallback(async () => {
        console.log("Connect Wallet Button Clicked");

        if (typeof AlgoSigner !== 'undefined') {
            try {
                const r = await AlgoSigner.connect();
                const response = JSON.stringify(r, null, 2);
                console.log(response)
                if (response == "{}") {
                    const r = await AlgoSigner.accounts({
                        ledger: 'TestNet'
                    });
                    var accounts = JSON.stringify(r, null, 2);
                    Swal.fire({
                        title: 'Wallets',
                        type: 'success',
                        text: accounts
                    })
                } else {
                    Swal.fire({
                        title: 'Warning',
                        type: 'warning',
                        text: response.message
                    })
                }
            } catch (e) {
                console.error(e);
                Swal.fire({
                    title: 'Error',
                    type: 'warning',
                    text: JSON.stringify(e, null, 2)
                })
            }
        } else {
            Swal.fire({
                title: 'Confirm',
                type: 'success',
                text: 'AlgoSigner is not installed, Would you install AlgoSigner?',
                showCancelButton: true
            }).then(result => {
                if (result.dismiss != 'cancel') {
                    window.open("https://chrome.google.com/webstore/detail/algosigner/kmmolakhbgdlpkjkcjkebenjheonagdm?hl=en-US", '_blank', 'noopener,noreferrer');
                }
            }).catch(error => {
                // when promise rejected...
                Swal.fire({
                    title: 'Error',
                    type: 'warning',
                    text: 'AlgoSigner is not installed',
                });
            });
        }
    })

    const connectBankHandleClick = () => {
        console.log("Connect Bank Button Clicked");
    }

    return (
        <div className="body-part">
            <div className="row">
                <div className="col-lg-6 mt-5">
                    <ConnectButton title={'Connect Wallet'} handleClick={connectWalletHandleClick} />
                </div>
                <div className="col-lg-6 mt-5">
                    <ConnectButton title={'Connect Bank Debit Card / Bank Account'} handleClick={connectBankHandleClick} />
                </div>
            </div>
        </div >
    )
}

export default ConnectWallet;