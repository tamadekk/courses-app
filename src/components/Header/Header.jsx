import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../store/selector';

import styles from './Header.module.css';

import Logo from './components/Logo/Logo';
import Button from './../../common/Button/Button';
import { userLogOutAcion } from '../../store/users/actions.js';

const Header = () => {
	const userData = useSelector(getUser);
	const dispatch = useDispatch();
	const location = useLocation();
	const handleLogout = () => {
		dispatch(userLogOutAcion());
		return localStorage.removeItem('token');
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
						type='text'
						onClick={getIsLoggedIn() ? handleLogout : () => {}}
					/>
				)}
			</Link>
		</header>
	);
};

export default Header;
