import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Header from '../Header/Header';

import Input from '../../common/Input/Input';

import Button from '../../common/Button/Button';

import styles from './Registration.module.css';

const Registration = () => {
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
				<div className={styles.formContainer}>
					<form onSubmit={(e) => submitUserData(e)}>
						<label>
							<b>Name</b>
							<Input
								type='text'
								name='name'
								isRequired
								getData={handleTest}
								value={userData.name}
							/>
						</label>
						<label>
							<b>Email</b>
							<Input
								type='email'
								name='email'
								isRequired
								getData={handleTest}
								value={userData.email}
							/>
						</label>
						<label>
							<b>Password</b>
							<Input
								type='password'
								name='password'
								isRequired
								getData={handleTest}
								value={userData.password}
							/>
						</label>
						<Button type='submit' buttonText='Registration' />
						<p>
							If you have an account you may{' '}
							<b>
								<Link to='/Login' className={styles.Link}>
									Login
								</Link>
							</b>
						</p>
					</form>
				</div>
			</div>
		</>
	);
};

export default Registration;
