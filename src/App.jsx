import Logo from './components/Header/components/Logo/Logo';
import Button from './common/Button/Button';
import styles from './components/Header/Header.module.css';
import Courses from './components/Courses/Courses';

function Header() {
	const isAuthenticated = false;
	const name = 'Vladyslav Raduta';
	return (
		<header className={styles.header}>
			<Logo />
			<span className={styles.span}>{name}</span>
			<Button buttonText={isAuthenticated ? 'Logout' : 'Login'}></Button>
		</header>
	);
}

function App() {
	return (
		<div>
			<Header />
			<Courses />
		</div>
	);
}

export default App;
