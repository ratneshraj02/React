import React, { useState } from 'react';

const role = ['Frontend', 'BackEnd', 'AI Engineer'];

function ManualForm() {
	const [values, setValue] = useState({
		name: '',
		email: '',
		role: 'Frontend',
		experience: '',
		cover: '',
	});

	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	function set(field) {
		return (e) => setValue((v) => ({ ...v, [field]: e.target.value }));
	}

	function validate(v) {
		const e = {};
		if (!v.name.trim()) {
			e.name = 'name is required';
		}

		if (!v.email.trim()) {
			e.email = 'email is required';
		}

		return e;
	}

	function submit(ev) {
		ev.preventDefault();
		const e = validate(values);
		setErrors(e);

        if (Object.keys(e).length === 0) {
            setSubmitted(true);
        }
	
	}

	if (submitted) {
		return (
			<div>
				<h1>Form submitted Successfully : {values.name}</h1>
			</div>
		);
	}

	return (
		<div>
			<form
				onSubmit={submit}
				noValidate>
				<label>Full Name</label>
				<input
					value={values.name}
					onChange={set('name')}
				/>
				{errors.name && <span>{errors.name}</span>}
				<br />
				<br />
				<label>Email</label>
				<input
					value={values.email}
					onChange={set('email')}
				/>
				{errors.email && <span>{errors.email}</span>}
				<br />
				<br />
				<button
					type="submit"
					onClick={() => console.log(values.name, values.email)}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default ManualForm;
