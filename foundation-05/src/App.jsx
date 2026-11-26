import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Post from './components/post.jsx';

function App() {
	const [posts, setPosts] = useState([]);
	const [status, setStatus] = useState('idle');
	const [seconds, setSecond] = useState(10);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setSecond((current) => Math.max(current - 1, 0));
		}, 1000);
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	//fetch posts
	useEffect(() => {
		const controller = new AbortController();
		async function loadPost() {
			try {
				setStatus('loading');
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts/',
					{ signal: controller.signal },
				);
				const data = response.data;
				setPosts(data);
				setStatus('success');
			} catch (error) {
				if (axios.isCancel(error) || error.code === 'ERR_CANCELED') {
					console.log('Fetch aborted', error);
				} else {
					setStatus('error');
				}
			}
		}

		loadPost();
		return () => {
			controller.abort();
		};
	}, []);

	return (
		<>
			<div>
				<h1>useEffect</h1>
				<h3>{seconds}</h3>
				{status === 'loading' && <p>Loading</p>}

				{status === 'error' && <p>Something went wrong....</p>}

				{status === 'success' && (
					<div className="posts-container">
						{posts.map((post) => (
							<Post
								key={post.id}
								post={post}
							/>
						))}
					</div>
				)}
			</div>
		</>
	);
}

export default App;
