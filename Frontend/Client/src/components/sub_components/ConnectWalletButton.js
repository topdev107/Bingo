/* global AlgoSigner */
import React from 'react'

import ConnectButton from './ConnectButton';
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useCallback } from "react";

const ConnectWalletButton = () => {
    let url = window.BASE_URL + "/wallets/adds";

    const handleClick = useCallback(async () => {

        if (typeof AlgoSigner !== "undefined") {
            try {
                const r = await AlgoSigner.connect();
                const response = JSON.stringify(r, null, 2);

                if (response == "{}") {
                    const r = await AlgoSigner.accounts({
                        ledger: "TestNet",
                    });

                    r.forEach((ele) => {
                        ele.owner = "default_user";
                    });
                    let accounts = JSON.stringify(r);

                                
                    axios
                        .post(url, {
                            wallets: accounts
                        })
                        .then((response) => {
                            if (response.data.status === "success") {
                                Swal.fire({
                                    title: "Wallets",
                                    text: "Successfully Connected",
                                });
                            } else {
                                Swal.fire({
                                    title: "Wallets",
                                    type: "success",
                                    text: JSON.stringify(response.data),
                                });
                            }
                        })
                        .catch((err) => {
                            Swal.fire({
                                title: "Warning",
                                type: "warning",
                                text: err
                            });
                        })
                } else {
                    Swal.fire({
                        title: "Warning",
                        type: "warning",
                        text: response.message,
                    });
                }
            } catch (e) {
                console.error(e);
                Swal.fire({
                    title: "Error",
                    type: "warning",
                    text: JSON.stringify(e, null, 2),
                });
            }
        } else {
            Swal.fire({
                title: "Confirm",
                type: "success",
                text: "AlgoSigner is not installed, Would you install AlgoSigner?",
                showCancelButton: true,
            })
                .then((result) => {
                    if (result.dismiss != "cancel") {
                        window.open(
                            "https://chrome.google.com/webstore/detail/algosigner/kmmolakhbgdlpkjkcjkebenjheonagdm?hl=en-US",
                            "_blank",
                            "noopener,noreferrer"
                        );
                    }
                })
                .catch((error) => {
                    // when promise rejected...
                    Swal.fire({
                        title: "Error",
                        type: "warning",
                        text: "AlgoSigner is not installed",
                    });
                });
        }
    });

    return (
        <ConnectButton title={'Connect Wallet'} handleClick={handleClick} />
    )
}

export default ConnectWalletButton;