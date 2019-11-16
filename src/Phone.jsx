import React from "react";
import "./styles/Phone.scss";

class Phone extends React.Component {
    render () {
        return (
            <React.Fragment>
            <div className="screenContainer">
                <img className="phoneBackground" src={require("./instagram_images/phoneBackground.png")} alt="phone background"></img>
                <img className="screen1" src={require("./instagram_images/screen1.jpg")} alt="screen1"></img>
                <img className="screen2" src={require("./instagram_images/screen2.jpg")} alt="screen2"></img>
                <img className="screen3" src={require("./instagram_images/screen3.jpg")} alt="screen3"></img>
                <img className="screen4" src={require("./instagram_images/screen4.jpg")} alt="screen4"></img>
            </div>
            </React.Fragment>
        );
    }
}

export default Phone;