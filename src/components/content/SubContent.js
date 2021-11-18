import React from 'react'
import ConnectWallet from './subpages/ConnectWallet';
import EarnFreeCoins from './subpages/EarnFreeCoins';
import EarnInterest from './subpages/EarnInterest';
import Home from './subpages/Home';
import Play from './subpages/Play';
import HowItWorks from './subpages/HowItWorks';
import Lottery from './subpages/Lottery';

const SubContent = (props) => {
    return (
        props.link == "/" ? <Home /> :
        props.link == "/earn_interest" ? <EarnInterest /> :
        props.link == "/connect_wallet" ? <ConnectWallet /> :
        props.link == "/earn_free_coins" ? <EarnFreeCoins /> :
        props.link == "/lottery" ? <Lottery /> :
        props.link == "/play" ? <Play /> :
        props.link == "/how_it_works" ? <HowItWorks /> : <Home />
    );
}

export default SubContent;