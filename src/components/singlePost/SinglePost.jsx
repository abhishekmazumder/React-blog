import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import postBg from '../../assets/post-bg.jpg';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './singlePost.css';

const SinglePost = () => {
	// const { postId } = useParams();
	// console.log(postId);
	const location = useLocation();
	const postId = location.pathname.split('/')[2];
	console.log(postId);

	const [post, setPost] = useState({});

	useEffect(() => {
		const getSinglePost = async () => {
			const response = await axios.get(
				`http://localhost:5000/api/posts/${postId}`
			);
      setPost(response.data);
			// console.log(response.data);
		};

		getSinglePost();
	}, [postId]);

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img src={post.photo ? post.photo : postBg} alt="" className="singlePostImg" />
				<h1 className="singlePostTitle">
					{post.title}
					<div className="singlePostEdit">
						<FaEdit className="singlePostIcon" />
						<FaTrashAlt className="singlePostIcon" />
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author: <b>{post.username}</b>
					</span>
					<span className="singlePostDate">{new Date(post.createdAt).toString()}</span>
				</div>
				<p className="singlePostContent">
					{post.desc}
				</p>
			</div>
		</div>
	);
};

export default SinglePost;
