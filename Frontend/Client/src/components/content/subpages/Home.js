/* global AlgoSigner */
import React from 'react'
import playImg from '../../../assets/play.jpg'
import earnImg from '../../../assets/earn_free_coins.jpg'
import lotteryImg from '../../../assets/lottery.jpg'
import interestImg from '../../../assets/earn_interest.jpg'
import casinoImg from '../../../assets/casino.png'
import swapImg from '../../../assets/cross_chain_swapping.jpg'
import BodyTile from '../../sub_components/BodyTile'
import ConnectButton from '../../sub_components/ConnectButton'
import Swal from "sweetalert2";
import { useState, useCallback } from "react";


const Home = () => {

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

    return (
        <div className="body-part custom-border">
            {/* <div className="connect_btn"><span>Connect Wallet</span></div> */}
            <ConnectButton title={'Connect Wallet'} handleClick={connectWalletHandleClick}/>

            <div className="row mt-5">
                <div className="col-lg-6">
                    <BodyTile
                        img={playImg}
                        title={"Play"}
                        desc={"Takes user to free arcade game section, need BINGO tokens to play games. Games have weekly tournaments and high score payouts. See "}
                        link={"https://www.crazygames.com/"}
                    />
                </div>
                <div className="col-lg-6">
                    <BodyTile
                        img={earnImg}
                        title={"Earn Free Coins"}
                        desc={"Takes User to Survey Page where users complete surveys to earn free coins"}
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <BodyTile
                        img={lotteryImg}
                    />
                </div>
                <div className="col-lg-6">
                    <BodyTile
                        title={"Lottery"}
                        desc={"Weekly lottery with no guaranteed winner, pot grows until winner is selected. Users stake coins for tickets, users do not have to choose individual numbers. See "}
                        link={"https://app.yieldly.finance/prize-games"}
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4">
                    <BodyTile
                        img={interestImg}
                        title={"Earn Interest"}
                        desc={"Users can stake coins to earn interest. Users get bonus interest if they enable keep the change and extra bonus interest if they enable reoccurring buys"}
                    />
                </div>
                <div className="col-lg-4">
                    <BodyTile
                        img={casinoImg}
                        title={"Casino"}
                        desc={"User can play casino games/tournaments with other users and bots with BINGO coins to win BINGO coins. Same page as PLAY, different section"}
                    />
                </div>
                <div className="col-lg-4">
                    <BodyTile
                        img={swapImg}
                        title={"Cross Chain Swapping"}
                        desc={"Users can swap BINGO coins for other coins"}
                    />
                </div>
            </div>
        </div >
    )
}

export default Home;