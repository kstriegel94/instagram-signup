import React from "react";
import "./styles/Footer.scss";

class Footer extends React.Component {
    render () {
        return (
            <div className="footerContainer">
                <div className="footerLinks">
                    <a href="https://about.instagram.com/about-us">About Us</a>
                    <a href="https://help.instagram.com/">Support</a>
                    <a href="https://instagram-press.com/">Press</a>
                    <a href="https://www.instagram.com/developer/">Api</a>
                    <a href="https://www.instagram.com/about/jobs/">Jobs</a>
                    <a href="https://help.instagram.com/519522125107875">Privacy</a>
                    <a href="https://help.instagram.com/581066165581870">Terms</a>
                    <a href="https://www.instagram.com/explore/locations/">Directory</a>
                    <a href="https://www.instagram.com/directory/profiles/">Profiles</a>
                    <a href="https://www.instagram.com/directory/hashtags/">Hashtags</a>
                    <a href="https://www.instagram.com/">Language</a>
                </div>
                <div className="copyRight">
                    <p>&copy; 2019 INSTAGRAM FROM FACEBOOK</p>
                </div>
            </div>
        );
    }
}

export default Footer;