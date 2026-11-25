import './App.css';

const shows = [
	{
		id: 1,
		title: 'The Component Returns',
		time: '10:00 AM',
		hall: 'Hall A',
	},
	{
		id: 2,
		title: 'Attack of the Re-render',
		time: '12:30 PM',
		hall: 'Hall B',
	},
	{
		id: 3,
		title: 'Virtual DOM Nights',
		time: '04:00 PM',
		hall: 'Hall C',
	},
];

function App() {
	return (
		<div>
			<div id="heading">
				<h1>Hello World</h1>
			</div>
			<br></br>
			<section className="grid">
				{shows.map((show) => (
					<article>
						<p className="className">{show.hall}</p>
						<h3>{show.title}</h3>
						<p className="muted">{show.time}</p>
					</article>
				))}
			</section>
		</div>
	);
}

export default App;
