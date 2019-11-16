import React from "react";
import "./styles/Input.scss";

class Input extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
        <div>
        <div className="inputContainer">
            <label>
                <span className="inputTitle">{this.props.value}</span>
                <input
                    aria-label="Mobile Number or Email"
                    aria-required="true"
                    autoCapitalize="off"
                    autoComplete="tel"
                    autoCorrect="off"
                    name="emailOrPhone"
                    type="text"
                    inputaria-label="Mobile"
                />
            </label>
        </div>
        </div>
        );
    };
}

export default Input;