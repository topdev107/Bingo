import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
import isMobile from 'react-device-detect';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Moblie first
    this.state = {
      isOpen: isMobile ? false : true,
      //isMobile: true
    };

    this.previousWidth = -1;
  }

  updateWidth() {
    const width = window.innerWidth;
    const widthLimit = 576;
    //const isMobile = width <= widthLimit;
    const wasMobile = this.previousWidth <= widthLimit;

    this.setState({
      isOpen: !isMobile
    })

    // if (isMobile !== wasMobile) {
    //   this.setState({
    //     isOpen: !isMobile
    //   });
    // }

    // if (isMobile) {
    //   this.setState({
    //     isOpen: false
    //   });
    // } else {
    //   this.setState({
    //     isOpen: true
    //   });
    // }

    this.previousWidth = width;
  }

  /**
   * Add event listener
   */
  UNSAFE_componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth.bind(this));
  }

  /**
   * Remove event listener
   */
  UNSAFE_componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="App wrapper">
        <SideBar toggle={this.toggle} isOpen={this.state.isOpen} link={this.props.link}/>
        <Content toggle={this.toggle} isOpen={this.state.isOpen} link={this.props.link}/>
      </div>
    );
  }
}

export default App;
