import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import propTypes from 'prop-types';

import Header from '../Header/Header';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import styles from './Login.module.css';
import { addUserAction } from '../../store/users/actions';
import { loginUser } from '../../services';

const Login = ({ isValid, setIsValid }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const submitUserData = async (e) => {
		e.preventDefault();
		if (!(email && password)) {
			setIsValid(false);
			return;
		}

		try {
			const data = await loginUser({ email, password });
			if (data.successful) {
				localStorage.setItem('token', data.result);
				localStorage.setItem('name', data.user.name);
				dispatch(addUserAction(data));
				navigate('/courses');
			} else {
				console.error('Invalid data');
			}
		} catch (error) {
			console.error('Error during login:', error);
		}
	};

	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.formContainer}>
					<form onSubmit={submitUserData}>
						<label>
							<b>Email</b>
							<Input
								type='email'
								name='email'
								isRequired
								onChange={handleEmailChange}
								value={email}
								isValid={isValid}
								placeholderText='Input Text'
							/>
						</label>
						<label>
							<b>Password</b>
							<Input
								type='password'
								name='password'
								isRequired
								onChange={handlePasswordChange}
								value={password}
								isValid={isValid}
								placeholderText='Input Text'
							/>
						</label>
						<Button buttonText='Login' type='submit' />
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

Login.propTypes = {
	isValid: propTypes.bool.isRequired,
	setIsValid: propTypes.func.isRequired,
};

export default Login;
