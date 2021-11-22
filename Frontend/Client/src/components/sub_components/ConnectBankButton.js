/* global AlgoSigner */
import React from 'react';
import Swal from "sweetalert2";
import ConnectButton from './ConnectButton';


const ConnectBankButton = () => {
    const handleClick = () => {
        Swal.fire({
            title: "Bank",
            text: "Successfully Connected",
        });
    }

    return (
        <ConnectButton title={'Connect Bank Debit Card / Bank Account'} handleClick={handleClick} />
    )
}

export default ConnectBankButton;