import React from 'react'
import NavBar from "./Navbar";

class Header extends React.Component {

  getNaveData(link) {
    switch (link) {
      case "/":
        return {title: "Bingo", desc: "Play, Earn, Trade"};
        break;
      case "/earn_interest":
        return {title: "Earn Interest", desc: ""};
        break;
      case "/connect_wallet":
        return {title: "Connect Wallet", desc: ""};
        break;      
      case "/earn_free_coins":
        return {title: "Earn Free Coins", desc: ""};
        break;    
      case "/lottery":
        return {title: "Lottery", desc: ""};
        break;      
      case "/play":
        return {title: "Play", desc: ""};
        break;      
      case "/how_it_works":
        return {title: "How It Works", desc: ""};
        break; 
      default:
        return {title: "Bingo", desc: "Play, Earn, Trade"};
        break;
    }
  }

  render() {
    return (
      <div>
        <div className="head_part d-flex justify-content-center align-items-center">
          <div className="text-align-center">
            <p className="text_big_ad blod">{this.getNaveData(this.props.link).title}</p>
            <p className="text_medium_ad">{this.getNaveData(this.props.link).desc}</p>
          </div>
        </div>
        <NavBar toggle={this.props.toggle} />
      </div>
    )
  }
}


export default Header