import React from 'react'
import "./register.css"

const Register = () => {
  return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm">
				<label>Email</label>
				<input type="text" placeholder="Enter Your Username..." />
				<label>Email</label>
				<input type="email" placeholder="Enter Your Email..." />
				<label>Password</label>
				<input type="password" placeholder="Enter Your password..." />
				<button className="registerBtn">Register</button>
			</form>
			<button className="registerLoginBtn">Register</button>
		</div>
	);
}

export default Register