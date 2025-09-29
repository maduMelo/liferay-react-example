import React, {useEffect, useState} from 'react';

import AddUserForm from './AddUserForm';
import Blogs from './Blogs';

import {getUsers} from './request';

function App() {

	return (
		<div className="row">
			<div className="col-8">
				<Blogs />
			</div>
		</div>
	);
}

export default App;