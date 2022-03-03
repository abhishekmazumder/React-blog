import React from 'react';
import './topbar.css';
import avatarImg from '../../assets/avatar_female.png';
import {
	FaFacebookSquare,
	FaTwitter,
	FaInstagram,
	FaSearch,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Topbar() {
	const user = false;
	return (
		<div className="top">
			<div className="topLeft">
				<FaFacebookSquare className="nav-social-icons" />
				<FaTwitter className="nav-social-icons" />
				<FaInstagram className="nav-social-icons" />
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link className="link" to="/">
							Home
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/about">
							About
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/write">
							Write
						</Link>
					</li>
					<li className="topListItem">{user && 'LOGOUT'}</li>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<img className="avatar" src={avatarImg} />
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link className="link" to="/login">
								LOGIN
							</Link>
						</li>
						<li className="topListItem">
							<Link className="link" to="/register">
								REGISTER
							</Link>
						</li>
					</ul>
				)}

				<FaSearch className="nav-search-icon" />
			</div>
		</div>
	);
}

export default Topbar;
