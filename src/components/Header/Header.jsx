import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { performLogout } from '../../store/users/thunk';

import styles from './Header.module.css';

import Logo from './components/Logo/Logo';
import Button from './../../common/Button/Button';
import { getUser } from '../../store/selector';

const Header = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const handleLogout = () => {
		const token = localStorage.getItem('token');
		dispatch(performLogout(token));
		localStorage.removeItem('token');
		localStorage.removeItem('name');
	};
	const getIsLoggedIn = () => {
		return localStorage.getItem('token');
	};

	const userName = useSelector(getUser);
	return (
		<header className={styles.header}>
			<Logo />
			{getIsLoggedIn() ? (
				<p className={styles.p}>{userName.name ?? userName.email}</p>
			) : (
				''
			)}
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
