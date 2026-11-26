import './App.css';
import AvatarCard from './components/avatarCard.jsx';
import Card from './components/card.jsx';
const avatars = [
	{
		id: 1,
		name: 'Nova',
		role: 'Navigator',
		power: 'Routing',
		initials: 'NV',
	},
	{
		id: 2,
		name: 'Flux',
		role: 'State Keeper',
		power: 'useState',
		initials: 'FX',
	},
	{
		id: 3,
		name: 'Memo',
		role: 'Optimizer',
		power: 'Memoization',
		initials: 'MM',
	},
];

function Shell({ title, children }) {
	return (
		<section>
			<p>Reusable Shell</p>
			<h2>{title}</h2>
			{children}
		</section>
	);
}

function App() {
	return (
		<div>
			<h1>Children in React</h1>
			<Shell title={'Batman'}>
				<h1>this is inside shell</h1>
				<p>this is also inside shell</p>
			</Shell>
			<h1>Hello from Ratnesh</h1>
			<sections>
				{avatars.map((avatar) => (
					<AvatarCard
						key={avatar.id}
						avatar={avatar}
						level={avatar.id === 1 ? 'Captain' : undefined}
					/>
				))}
			</sections>

			{
				<Card
					title={'Title'}
					subtitle={'Subtitle'}
					content={'Content'}
				/>
			}
		</div>

		
	);
}

export default App;
