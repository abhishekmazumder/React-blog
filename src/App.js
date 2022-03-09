import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import SinglePostPage from './pages/singlePostPage/SinglePostPage';
import WritePost from './pages/WritePost/WritePost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const user = false;
	return (
		<Router>
			<Topbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/register" element={user ? <Home /> : <Register />} />
				<Route path="/login" element={user ? <Home /> : <Login />} />
				<Route path="/write" element={user ? <WritePost /> : <Register />} />
				<Route path="/settings" element={user ? <Settings /> : <Register />} />
				<Route path="/posts/:postId" element={<SinglePostPage />} />
			</Routes>
		</Router>
	);
}

export default App;
