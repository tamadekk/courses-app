import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../Header/Header';

import Input from '../../common/Input/Input';

import Button from '../../common/Button/Button';

import styles from './Registration.module.css';

const Registration = () => {
	const sendRegistrationRequest = () => {
		return;
	};
	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.formContainer}>
					<form onSubmit={sendRegistrationRequest}>
						<label>
							<b>Name:</b>
							<Input type='text' name='username' isRequired='true' />
						</label>
						<label>
							<b>Email:</b>
							<Input type='email' name='email' isRequired='true' />
						</label>
						<label>
							<b>Password:</b>
							<Input type='password' name='password' isRequired='true' />
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
