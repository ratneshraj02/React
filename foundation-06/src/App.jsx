import { useEffect, useState } from 'react';
import './App.css';
import ManualForm from './ManualForm.jsx';
import HookForm from './HookForm.jsx';

function App() {
	const [tab, setTab] = useState('manual');

	return (
		<>
			<div>
				<div className="shell">
					<h1>Job Application</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste a at
						dolores quod expedita nostrum, animi consectetur, rem atque adipisci
						beatae omnis dignissimos facilis saepe! Quisquam deleniti laborum
						quo enim.
					</p>
				</div>
				<div className="tab">
					<button onClick={() => setTab('manual')}>Manual Form</button>
					<button onClick={() => setTab('Hookform')}>Hook Form</button>
				</div>
				<h2> Getting a Started with React </h2>
				{tab === "manual"? <ManualForm /> : <HookForm />}
			</div>
		</>
	);
}

export default App;
