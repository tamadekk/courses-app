import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.css';

import Logo from './components/Logo/Logo';
import Button from './../../common/Button/Button';

// const Header = ({ userData }) => {
const Header = () => {
	const location = useLocation();

	const handleLogout = () => {
		localStorage.removeItem('token');
	};

	const getIsLoggedIn = () => {
		return localStorage.getItem('token');
	};
	return (
		<header className={styles.header}>
			<Logo />
			{getIsLoggedIn() ? <p className={styles.p}>test</p> : ''}
			<Link to={getIsLoggedIn() ? '/login' : '/registration'}>
				{!['/login', '/registration'].includes(location.pathname) && (
					<Button
						buttonText={getIsLoggedIn() ? 'Logout' : 'Login'}
						category='text'
						onClick={getIsLoggedIn() ? handleLogout : () => {}}
					/>
				)}
			</Link>
		</header>
	);
};

export default Header;
