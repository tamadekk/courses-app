import styles from './Header.module.css';

import { useState } from 'react';

import Logo from './components/Logo/Logo';
import Button from './../../common/Button/Button';

const Header = () => {
	const [isAuthenticated, setAuthenticated] = useState(false);
	const name = 'Vladyslav Raduta';
	return (
		<header className={styles.header}>
			<Logo />
			{isAuthenticated ? <span className={styles.span}>{name}</span> : ''}
			<Button
				onClick={() => setAuthenticated(!isAuthenticated)}
				buttonText={isAuthenticated ? 'Logout' : 'Login'}
			></Button>
		</header>
	);
};
export default Header;
