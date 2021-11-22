/* global AlgoSigner */
import React from 'react';
import ConnectBankButton from '../../sub_components/ConnectBankButton';
import ConnectWalletButton from '../../sub_components/ConnectWalletButton';

const ConnectWallet = () => {

    return (
        <div className="body-part">
            <div className="row">
                <div className="col-lg-6 mt-5">
                    <ConnectWalletButton/>
                </div>
                <div className="col-lg-6 mt-5">
                    <ConnectBankButton/>
                </div>
            </div>
        </div >
    )
}

export default ConnectWallet;