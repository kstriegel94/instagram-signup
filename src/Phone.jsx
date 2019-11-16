import React from "react";
import "./styles/Phone.scss";

class Phone extends React.Component {
    render () {
        return (
            <div>
                <img className="phoneBackground" src={require("./instagram_images/phoneBackground.png")} alt="phone background"></img>
            </div>
        );
    }
}

export default Phone;