import React, { Component } from "react";
import "./index.css"

class Authentication extends Component {
    state = {
        isLoggedIn: false,
    };

    toggleAuthentication = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
        }));
    };

    render() {
        const { isLoggedIn } = this.state;
        let content;

        if (isLoggedIn) {
            content = (
                <div className="bg_container">
                    <p className="textStyle">Welcome User</p>
                    <button onClick={this.toggleAuthentication}>
                        Log Out
                    </button>
                    
                </div>
            );
        } else {
            content = (
                <div className="bg_container">
                    <p className="textStyle">Please Login</p>
                    <button onClick={this.toggleAuthentication}>
                        Log In
                    </button>
                    
                </div>
            );
        }

        return <div>{content}</div>;
    }
}

export default Authentication;
