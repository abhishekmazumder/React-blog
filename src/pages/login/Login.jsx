import React from 'react'
import { Link } from 'react-router-dom';
import "./login.css"

const Login = () => {
  return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm">
				<label>Email</label>
				<input type="email" placeholder="Enter Your Email..." />
				<label>Password</label>
				<input type="password" placeholder="Enter Your password..." />
				<button className="loginBtn">Login</button>
			</form>
			<button className="loginRegisterBtn">
				<Link className="link" to="/register">
					REGISTER
				</Link>
			</button>
		</div>
	);
}

export default Login