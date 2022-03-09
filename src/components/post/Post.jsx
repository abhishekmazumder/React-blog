import { Link } from 'react-router-dom';
import './post.css';

const Post = ({ post }) => {
	return (
		<div className="post">
			<img
				className="postImg"
				src={
					post.photo
						? post.photo
						: 'https://images.pexels.com/photos/5711957/pexels-photo-5711957.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
				}
				alt=""
			/>
			<div className="postInfo">
				<div className="post-category">
					{post.categories.map(c => (
						<span className="post-tag">{c.name}</span>
					))}
				</div>
				<Link to={`/posts/${post._id}`} className="link">
					<span className="postTitle">{post.title}</span>
				</Link>
				<hr />
				<span className="postDate">{new Date(post.createdAt).toString()}</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa
				est provident consequuntur voluptas ratione. Excepturi ut eum eaque!
				Deleniti accusamus fuga in expedita. Lorem ipsum dolor sit, amet
				consectetur adipisicing elit. Delectus sapiente cumque doloribus iure.
				Cupiditate, facere eos. Architecto deleniti, incidunt officia earum
				ducimus, at soluta in velit ipsum corporis, porro sapiente.
			</p>
		</div>
	);
};

export default Post;
