import React from "react";
import "./styles/Button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

class Button extends React.Component {
    render () {
        if (this.props.fb) {
            return (
                <div className="buttonContainer">
                    <button type="button" className="facebookButton" onClick={this.props.onClick}>
                    <FontAwesomeIcon icon={faFacebookSquare} size="lg" className="fbIcon"/>
                    <span className="facebookButtonText"> Log in with Facebook</span>
                    </button>
                </div>
            );
        } else {
            return (
                <div className="buttonContainer">
                    <button type="button" className="signUpButton" onClick={this.props.onClick}>
                    <span className="signUpButtonText">Sign up</span>
                    </button>
                </div>
            );
        }
    }

}

export default Button;