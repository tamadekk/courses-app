import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../Header/Header';

import Input from '../../common/Input/Input';

import Button from '../../common/Button/Button';

import styles from './Login.module.css';

const Login = ({ isValid, setIsValid, userData, setUserData }) => {
	const handleInputChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const submitUserData = async (e) => {
		e.preventDefault();
		if (!(userData.email && userData.password)) {
			setIsValid(false);
			return;
		}

		try {
			const response = await fetch('http://localhost:4000/login/', {
				method: 'POST',
				body: JSON.stringify(userData),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await response.json();

			if (data.successful) {
				localStorage.setItem('token', data.result);
				setUserData({ userData });
				window.location.href = '/courses';
			} else {
				console.error('Invalid data');
			}
		} catch (error) {
			console.error('Error during login:', error);
		}
	};

	return (
		<>
			<Header userData={userData} />
			<div className={styles.container}>
				<div className={styles.formContainer}>
					<form onSubmit={(e) => submitUserData(e)}>
						<label>
							<b>Email</b>
							<Input
								type='email'
								name='email'
								isRequired
								onChange={handleInputChange}
								value={userData.email}
								isValid={isValid}
							/>
						</label>
						<label>
							<b>Password</b>
							<Input
								type='password'
								name='password'
								isRequired
								onChange={handleInputChange}
								value={userData.password}
								isValid={isValid}
							/>
						</label>
						<Button buttonText='Login' onClick={submitUserData} />
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
