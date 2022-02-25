import React from 'react';
import './topbar.css';
import avatarImg from "../../assets/avatar_female.png"
import { FaFacebookSquare, FaTwitter, FaInstagram, FaSearch } from 'react-icons/fa';

function Topbar() {
	return (
		<div className="top">
			<div className="topLeft">
				<FaFacebookSquare className="nav-social-icons" />
				<FaTwitter className="nav-social-icons" />
				<FaInstagram className="nav-social-icons" />
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">Home</li>
					<li className="topListItem">About</li>
					<li className="topListItem">Write</li>
					<li className="topListItem">Logout</li>
				</ul>
			</div>
			<div className="topRight">
				<img className="avatar" src={avatarImg} />
				<FaSearch className="nav-search-icon" />
			</div>
		</div>
	);
}

export default Topbar;
