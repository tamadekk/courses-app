import React from 'react';

import propTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.css';

import Logo from './components/Logo/Logo';
import Button from './../../common/Button/Button';

const Header = ({ userData }) => {
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
			{getIsLoggedIn() ? <p className={styles.p}>{userData.name}</p> : ''}
			<Link to={'/login'}>
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

Header.propTypes = {
	userData: propTypes.object.isRequired,
};
export default Header;
