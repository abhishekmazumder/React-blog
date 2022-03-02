import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import SinglePostPage from './pages/singlePostPage/SinglePostPage';
import WritePost from './pages/WritePost/WritePost';

function App() {
	return (
		<div>
			<Topbar />
			{/* <Home /> */}
			{/* <SinglePostPage /> */}
			{/* <WritePost /> */}
			{/* <Settings /> */}
			{/* <Login /> */}
			<Register />
		</div>
	);
}

export default App;
