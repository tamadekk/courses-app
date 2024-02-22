import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Header from '../Header/Header';

import Input from '../../common/Input/Input';

import Button from '../../common/Button/Button';

import styles from './Login.module.css';

const Login = () => {
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
		fetch('http://localhost:4000/login/', {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.successful) {
					localStorage.setItem('token', data.result);
					window.location.href = '/courses';
				} else {
					console.error('Invalid data');
				}
			})
			.catch((error) => {
				console.error('Error during login:', error);
			});
	};

	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.formContainer}>
					<form onSubmit={(e) => submitUserData(e)}>
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
						<Button type='submit' buttonText='Login' />
						<p>If you don't have an account you may</p>
						<b>
							<Link to='/registration' className={styles.Link}>
								Registration
							</Link>
						</b>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
