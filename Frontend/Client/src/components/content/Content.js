import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import Home from "./subpages/Home";
import Header from './Header'
import Footer from './Footer'
import NavBar from "./Navbar";
import SubContent from "./SubContent";

class Content extends React.Component {
  render() {
    return (
      <Container fluid className={classNames("content", { "is-open": this.props.isOpen })} >      
        <Header toggle = {this.props.toggle} link={this.props.link}/>
        <SubContent link={this.props.link}/>
        <Footer />
      </Container>
    );
  }
}

export default Content;
