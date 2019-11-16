import React from "react";
import "./styles/Input.scss";
import { faThemeisle } from "@fortawesome/free-brands-svg-icons";

class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showTitle: true
        };

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleFocus(){
        this.setState({
            showTitle: false
        });
    }

    handleBlur() {
        if (this.props.text === "") {
            this.setState({
                showTitle: true
            });
        }
    }

    render() {
        return (
                <div className="inputContainer">
                    { this.state.showTitle ? <span className="inputTitle">{this.props.value}</span> : null }
                    <input
                        value={this.props.text}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onChange={this.props.onChange}
                        aria-label="Mobile Number or Email"
                        aria-required="true"
                        autoCapitalize="off"
                        autoComplete="tel"
                        autoCorrect="off"
                        name="emailOrPhone"
                        inputaria-label="Mobile"
                    />
                </div>
        );
    }
}

export default Input;