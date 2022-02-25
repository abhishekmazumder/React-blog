import React from 'react'
import heroImg from "../../assets/hero-cover.jpg"
import "./header.css"

const Header = () => {
  return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">React & Node</span>
				<span className="headerTitleLg">Blog</span>
			</div>
    <img className="headerImg" src={heroImg} alt="React Blog Hero Image" />
		</div>
	);
}

export default Header