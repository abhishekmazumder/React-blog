import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';

const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPost = async () => {
			const response = await axios.get('http://localhost:5000/api/posts');
			setPosts(response.data)
		};

		fetchPost();
	}, []);

	return (
		<>
			<Header />
			<div className="home">
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</>
	);
};

export default Home;
