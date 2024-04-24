import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './Header.module.css';

import Logo from './components/Logo/Logo';
import Button from './../../common/Button/Button';
import { userLogOutAcion } from '../../store/users/actions.js';

const Header = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const handleLogout = () => {
		dispatch(userLogOutAcion());
		localStorage.removeItem('token');
		localStorage.removeItem('name');
	};
	const getIsLoggedIn = () => {
		return localStorage.getItem('token');
	};

	const userName = localStorage.getItem('name');
	return (
		<header className={styles.header}>
			<Logo />
			{getIsLoggedIn() ? <p className={styles.p}>{userName}</p> : ''}
			<Link to={'/login'}>
				{!['/login', '/registration'].includes(location.pathname) && (
					<Button
						buttonText={getIsLoggedIn() ? 'Logout' : 'Login'}
						type='text'
						onClick={getIsLoggedIn() ? handleLogout : () => {}}
					/>
				)}
			</Link>
		</header>
	);
};

export default Header;
