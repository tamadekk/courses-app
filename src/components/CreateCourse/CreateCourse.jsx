import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './CreateCourse.module.css';

import Header from '../Header/Header';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

const CreateCourse = () => {
	const [userData, setUserdata] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleTest = (e) => {
		userData[e.target.name] = e.target.value;
		setUserdata(userData);
	};

	const submitUserData = (e) => {
		e.preventDefault();
		fetch('http://localhost:4000/register/', {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	return (
		<>
			<Header />
			<div className={styles.container}>
				<h1>Course Edit/Create Course</h1>
				<div className={styles.formContainer}>
					<form onSubmit={(e) => submitUserData(e)}>
						<h1>Main info</h1>
						<label>
							<b>Title</b>
							<Input
								type='text'
								name='title'
								isRequired
								getData={handleTest}
								value={userData.name}
							/>
						</label>
						<label>
							<b>Description</b>
							<textarea></textarea>
						</label>
						<div>
							<h1>Duration</h1>
							<div>
								<label>
									<b>Duration</b>
									<Input
										type='text'
										name='duration'
										isRequired
										getData={handleTest}
										value={userData.password}
									/>
									<p>x:xx hours</p>
								</label>
							</div>
							<h1>Authors</h1>
							<div>
								<label>
									<b>Author name</b>
									<Input
										type='text'
										name='authorName'
										isRequired
										getData={handleTest}
										value={userData.password}
									/>
									<Button buttonText='add author' category='text' />
								</label>
							</div>
						</div>
						<Button type='submit' buttonText='Registration' />
					</form>
				</div>
			</div>
		</>
	);
};

export default CreateCourse;
