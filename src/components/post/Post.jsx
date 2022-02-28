import './post.css';

const Post = () => {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://images.pexels.com/photos/5711957/pexels-photo-5711957.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
				alt=""
			/>
			<div className="postInfo">
				<div className="post-category">
					<span className="post-tag">Music</span>
					<span className="post-tag">Lifestyle</span>
				</div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur
        </span>
        <hr />
        <span className="postDate">1 Hour ago</span>
			</div>
			<p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa est provident consequuntur voluptas ratione. Excepturi ut eum eaque! Deleniti accusamus fuga in expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus sapiente cumque doloribus iure. Cupiditate, facere eos. Architecto deleniti, incidunt officia earum ducimus, at soluta in velit ipsum corporis, porro sapiente.</p>
		</div>
	);
};

export default Post;
