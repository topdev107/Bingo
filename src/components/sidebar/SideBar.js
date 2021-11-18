import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../assets/bingo_logo.png'
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faCoins,
  faCreditCard,
  faTimes,
  faGifts,
  faGamepad
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";

class SideBar extends React.Component {

  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <img src={logo} alt="logo" width="220" height="80" />
        </div>

        <Nav className="flex-column pt-2">
          {/* <p className="ml-3">Heading</p> */}

          <Nav.Item className={"/" === this.props.link ? "active" : ""}>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Nav.Link>
          </Nav.Item>

          {/* <SubMenu
            title="Pages"
            icon={faCopy}
            items={["Link", "Link2", "Active"]}
          /> */}

          <Nav.Item className={"/earn_interest" === this.props.link ? "active" : ""}>
            <Nav.Link href="/earn_interest">            
              <FontAwesomeIcon icon={faCoins} className="mr-2" />
              Earn Interest
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={"/connect_wallet" === this.props.link ? "active" : ""}>
            <Nav.Link href="/connect_wallet">
              <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
              Connect Wallet
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={"/earn_free_coins" === this.props.link ? "active" : ""}>
            <Nav.Link href="/earn_free_coins">
              <FontAwesomeIcon icon={faCoins} className="mr-2" />
              Earn Free Coins
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={"/lottery" === this.props.link ? "active" : ""}>
            <Nav.Link href="/lottery">
              <FontAwesomeIcon icon={faGifts} className="mr-2" />
              Lottery
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={"/play" === this.props.link ? "active" : ""}>
            <Nav.Link href="/play">
              <FontAwesomeIcon icon={faGamepad} className="mr-2" />
              Play
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={"/how_it_works" === this.props.link ? "active" : ""}>
            <Nav.Link href="/how_it_works">
              <FontAwesomeIcon icon={faQuestion} className="mr-2" />
              How It Works
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default SideBar;
