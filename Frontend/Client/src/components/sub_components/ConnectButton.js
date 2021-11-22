import React from 'react'

class ConnectButton extends React.Component {    
    render() {
        return (        
            <div className="connect_btn" onClick={() => this.props.handleClick()}><span>{this.props.title}</span></div>
        );
    }
}

export default ConnectButton;