import React, {useCallback, useEffect, useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';
import { useBlogs } from './requests/useBlogs';

import {addUser} from './request';

function AddUserForm() {
	const [emailAddress, setEmailAddress] = useState('');
	const [familyName, setFamilyName] = useState('');
	const [givenName, setGivenName] = useState('');
	const [userName, setUserName] = useState('');

	const { blogs, getAllBlogs } = useBlogs();

	const onButtonSubmit = useCallback(() => {
		addUser({
			emailAddress,
			familyName,
			givenName,
			userName
		}).then(() => {
			setEmailAddress('');
			setFamilyName('');
			setGivenName('');
			setUserName('');
		});
	},
	[
		addUser,
		emailAddress,
		familyName,
		givenName,
		userName
	]);

	useEffect(() => {
		console.log('blogs', blogs);
	}, [blogs]);

	return (
		<div>
			<h1>Add User Form</h1>

			<ClayForm.Group>
				<label htmlFor="givenName">Given Name</label>

				<ClayInput
					id="givenName"
					onChange={event => setGivenName(event.target.value)}
					placeholder="Joe"
					type="text"
					value={givenName}
				/>
			</ClayForm.Group>
			<ClayForm.Group>
				<label htmlFor="familyName">Family Name</label>

				<ClayInput
					id="familyName"
					onChange={event => setFamilyName(event.target.value)}
					placeholder="Bloggs"
					type="text"
					value={familyName}
				/>
			</ClayForm.Group>
			<ClayForm.Group>
				<label htmlFor="emailAddress">Email Address</label>

				<ClayInput
					id="emailAddress"
					onChange={event => setEmailAddress(event.target.value)}
					placeholder="joe.bloggs@liferay.com"
					type="text"
					value={emailAddress}
				/>
			</ClayForm.Group>
			<ClayForm.Group>
				<label htmlFor="userName">User Name</label>

				<ClayInput
					id="userName"
					onChange={event => setUserName(event.target.value)}
					placeholder="jBloggs"
					type="text"
					value={userName}
				/>
			</ClayForm.Group>

			<button className="btn btn-primary" onClick={() => onButtonSubmit()}>Add User</button>


			
			<button className="btn btn-primary" onClick={() => getAllBlogs()}>Get all blogs</button>
			
		</div>
	);
}

export default AddUserForm;