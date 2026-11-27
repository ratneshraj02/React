import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const role = ['Frontend', 'BackEnd', 'AI Engineer'];

const HookForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful, isSubmitting },
		getValues,
	} = useForm({ defaultValues: { name: 'Ratnesh' }, mode: 'onTouched' });

	function submit(data) {
		return new Promise((resolve) => console.log('submitted Data', data));
    }

	if (isSubmitSuccessful) {
		return (
			<div>
				<h1>Form submitted Successfully</h1>
			</div>
		);
	}
	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<label>Full Name</label>
				<input {...register('name', { required: 'name is required' })} />
				{errors.name && <span>{errors.name.message}</span>}
				<br />
				<br />
				<label>Email</label>
				<input {...register('email', { required: 'email is required' })} />
				{errors.email && <span>{errors.email.message}</span>}
				<br />
				<br />
				<button
					type="submit"
					disabled={isSubmitting}>
					{isSubmitting ? 'Submitting.....' : 'Submit'}
				</button>
			</form>
		</div>
	);
};

export default HookForm;
