import {
	FaFacebookSquare,
	FaTwitter,
	FaInstagram
} from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">About Me</span>
				<img className='sidebar-image'
					src="https://avatars.githubusercontent.com/u/24761197?v=4"
					alt=""
				/>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque modi
					eveniet natus consectetur optio, ipsum pariatur expedita iste porro id
					deleniti beatae non reiciendis explicabo a? Veritatis aut adipisci
					sed.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">Categories</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Lefestyle</li>
					<li className="sidebarListItem">Movies</li>
					<li className="sidebarListItem">Gadgets</li>
					<li className="sidebarListItem">Tutorials</li>
					<li className="sidebarListItem">Movies</li>
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">Follow us</span>
				<div className="sidebarSocial">
					<FaFacebookSquare className="sidebar-social-icons" />
					<FaTwitter className="sidebar-social-icons" />
					<FaInstagram className="sidebar-social-icons" />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
