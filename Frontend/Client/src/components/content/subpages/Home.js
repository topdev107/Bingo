/* global AlgoSigner */
import React from "react";
import BodyTile from "../../sub_components/BodyTile";
import ConnectWalletButton from "../../sub_components/ConnectWalletButton";

const Home = () => {    

    return (
        <div className="body-part custom-border">
            
            <ConnectWalletButton/>

            <div className="row mt-5">
                <div className="col-lg-6">
                    <BodyTile
                        img="./assets/play.jpg"
                        title={"Play"}
                        desc={
                            "Takes user to free arcade game section, need BINGO tokens to play games. Games have weekly tournaments and high score payouts. See "
                        }
                        link={"https://www.crazygames.com/"}
                    />
                </div>
                <div className="col-lg-6">
                    <BodyTile
                        img="./assets/earn_free_coins.jpg"
                        title={"Earn Free Coins"}
                        desc={
                            "Takes User to Survey Page where users complete surveys to earn free coins"
                        }
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <BodyTile img="./assets/lottery.jpg" />
                </div>
                <div className="col-lg-6">
                    <BodyTile
                        title={"Lottery"}
                        desc={
                            "Weekly lottery with no guaranteed winner, pot grows until winner is selected. Users stake coins for tickets, users do not have to choose individual numbers. See "
                        }
                        link={"https://app.yieldly.finance/prize-games"}
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4">
                    <BodyTile
                        img="./assets/earn_interest.jpg"
                        title={"Earn Interest"}
                        desc={
                            "Users can stake coins to earn interest. Users get bonus interest if they enable keep the change and extra bonus interest if they enable reoccurring buys"
                        }
                    />
                </div>
                <div className="col-lg-4">
                    <BodyTile
                        img="./assets/casino.png"
                        title={"Casino"}
                        desc={
                            "User can play casino games/tournaments with other users and bots with BINGO coins to win BINGO coins. Same page as PLAY, different section"
                        }
                    />
                </div>
                <div className="col-lg-4">
                    <BodyTile
                        img="./assets/cross_chain_swapping.jpg"
                        title={"Cross Chain Swapping"}
                        desc={"Users can swap BINGO coins for other coins"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
