import { FaUser } from 'react-icons/fa';
import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

const Settings = () => {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt=""
						/>
						<label htmlFor="fileInput">
							<FaUser className='settingsPPIcon' />
						</label>
						<input type="file" id="fileInput" style={{ display: 'none' }} />
					</div>
					<label>Username</label>
					<input type="text" placeholder="john_doe" />
					<label>Email</label>
					<input type="email" placeholder="johndoe@gmail.com" />
					<label>Password</label>
					<input type="password" />
          <button className='settingsSubmit'>Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Settings;
