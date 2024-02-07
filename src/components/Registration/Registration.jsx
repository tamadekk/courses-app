import { Link } from 'react-router-dom';

const Registration = () => {
	return (
		<>
			<h2>Registration</h2>
			<form>// Registration form code</form>
			<p>If you have an account you may </p>
			<Link to='/registration'>Login</Link>
		</>
	);
};
