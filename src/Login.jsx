import React from "react";
import "./styles/Login.scss";
import Input from "./Input";
import Button from "./Button";
import Footer from "./Footer";
import Phone from "./Phone";

class Login extends React.Component {
	render () {
		return (
			<React.Fragment>
			<div className="logInContainer">
			<Phone />
			<div className="signInContainer">
				<form>
					<img className="instagramLogo" src={require("./instagram_images/instagramLogo.png")} alt="instagram logo"></img>
					<h2 className="header">Sign up to see photos and videos from your friends.</h2>
					<div>
						<Button fb={true}/>
						<div className="header" id="orText">OR</div>
					</div>
					<label className="labels">
					<Input value="Mobile Number or Email" />
					<Input value="Full Name" />
					<Input value="Username" />
					<Input value="Password" />
					</label>
					<Button />
					<div className="agreementContainer">
						<p className="header" id="agreement">
						By signing up, you agree to our
						Terms, Data Policy and Cookies Policy.
						</p>
					</div>
				</form>
				<div className="haveAnAccountContainer">
				<span>Have an account? </span>
				<a href="https://www.instagram.com/accounts/login/?source=auth_switcher" id="logInText">Log In</a>
			</div>
			<div className="getTheAppContainer">
				Get the app.
			</div>
			<div className="storeButtonsContainer">
				<img className="appleStore" src={require("./instagram_images/appleStore.png")} alt="apple store button"></img>
				<img className="googleStore" src={require("./instagram_images/googleStore.png")} alt="google store button"></img>
			</div>
			</div>
			</div>
			<Footer />
			</React.Fragment>
		);
	}
}

export default Login;