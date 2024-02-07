import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<>
			<h2>Login</h2>
			<form>// Login form code</form>
			<p>If you don't have an account you may</p>
			<Link to='/registration'>Registration</Link>
		</>
	);
};
