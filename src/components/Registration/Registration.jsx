import React from 'react';

import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Header from '../Header/Header';

import Input from '../../common/Input/Input';

import Button from '../../common/Button/Button';

import styles from './Registration.module.css';

const Registration = ({ isValid, setIsValid, userData, setUserData }) => {
	const handleInputChange = (e) => {
		userData[e.target.name] = e.target.value;
		setUserData(userData);
	};

	const submitUserData = (e) => {
		e.preventDefault();
		if (!(userData.name && userData.email && userData.password)) {
			setIsValid(false);
			return;
		}
		fetch('http://localhost:4000/register/', {
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
				console.error('Error during registration:', error);
			});
	};

	return (
		<>
			<Header userData={userData} />
			<div className={styles.container}>
				<div className={styles.formContainer}>
					<form onSubmit={(e) => submitUserData(e)}>
						<label>
							<b>Name</b>
							<Input
								type='text'
								name='name'
								isRequired
								onChange={handleInputChange}
								value={userData.name}
								isValid={isValid}
							/>
						</label>
						<label>
							<b>Email</b>
							<Input
								type='email'
								name='email'
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
								onChange={handleInputChange}
								value={userData.password}
								isValid={isValid}
							/>
						</label>
						<Button onClick={submitUserData} buttonText='Registration' />
						<p>
							If you have an account you may{' '}
							<b>
								<Link to='/login' className={styles.Link}>
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

Registration.propTypes = {
	isValid: propTypes.bool.isRequired,
	setIsValid: propTypes.func.isRequired,
	userData: propTypes.object.isRequired,
	setUserData: propTypes.func.isRequired,
};
export default Registration;
