import React from "react";
import "./styles/Login.scss";
import Input from "./Input";
import Button from "./Button";
import Footer from "./Footer";
import Phone from "./Phone";

class Login extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			email: "",
			name: "",
			username: "",
			password: "",
			showSignUp: false,
			emailTitle: "Mobile Number or Email",
			nameTitle: "Full Name",
			usernameTitle: "Username",
			passwordTitle: "Password"
		}

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSignUpClick = this.handleSignUpClick.bind(this);
	}

	handleSignUpClick() {
		if (this.state.password.length > 6) {
			this.setState({
				showSignUp: true,
			});
		} else {
			alert('error: password must be greater than 6 characters long');
		}
	}

	handleEmailChange(e) {
        this.setState({
            email: e.target.value
		});
	}
	
	handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
	}
	
	handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        });
	}
	
	handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
	}

	render () {
		if (this.state.showSignUp) {
			return (
				<ul>
					<li>email: {this.state.email}</li>
					<li>name: {this.state.name}</li>
					<li>username: {this.state.username}</li>
					<li>password: {this.state.password}</li>
				</ul>
			);
		} else {
			return (
				<React.Fragment>
				<div className="logInContainer">
					<Phone />
					<div>
						<div className="signInContainer">
								<form>
									<img className="instagramLogo" src={require("./instagram_images/instagramLogo.png")} alt="instagram logo"></img>
									<h2 className="header">Sign up to see photos and videos from your friends.</h2>
									<div>
										<Button fb={true}/>
										<div className="header" id="orText">OR</div>
									</div>
									<label className="labels">
									<Input value={this.state.emailTitle} onChange={this.handleEmailChange} text={this.state.email}/>
									<Input value={this.state.nameTitle} onChange={this.handleNameChange} text={this.state.name}/>
									<Input value={this.state.usernameTitle} onChange={this.handleUsernameChange} text={this.state.username}/>
									<Input value={this.state.passwordTitle} onChange={this.handlePasswordChange} text={this.state.password}/>
									</label>
									<Button onClick={this.handleSignUpClick}/>
									<div className="agreementContainer">
										<p className="header" id="agreement">
										By signing up, you agree to our
										Terms, Data Policy and Cookies Policy.
										</p>
									</div>
								</form>
						</div>
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
}

export default Login;