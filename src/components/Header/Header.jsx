import styles from './Header.module.css';

import Logo from './components/Logo/Logo';
import Button from './../../common/Button/Button';

const Header = ({ isAuthenticated, handleTest, name }) => {
	return (
		<header className={styles.header}>
			<Logo />
			{isAuthenticated ? <span className={styles.span}>{name}</span> : ''}
			<Button
				onClick={() => handleTest()}
				buttonText={isAuthenticated ? 'Logout' : 'Login'}
				category='text'
			/>
		</header>
	);
};
export default Header;
