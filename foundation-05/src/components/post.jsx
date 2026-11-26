import './post.css';

function Post({ post }) {
	return (
		<div className="post-card">
			<div className="post-header">
				<span className="post-badge">POST #{post.id}</span>
				<span className="user-badge">User {post.userId}</span>
			</div>

			<h3 className="post-title">{post.title}</h3>

			<p className="post-body">{post.body}</p>

			<div className="post-footer">
				<span>✨ Blog Post</span>
				<span className="read-more">Read More →</span>
			</div>
		</div>
	);
}

export default Post;
