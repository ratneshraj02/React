import Btn from './btn.jsx';
function card({ title, subtitle, content }) {
	return (
		<div className="card">
			<h2>{title}</h2>
			<h4>{subtitle}</h4>
			<p>{content}</p>
			<div>
				<Btn title= {"Submit"}></Btn>
			</div>
		</div>
	);
}


export default card;