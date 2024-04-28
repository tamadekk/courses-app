import { Navigate } from 'react-router-dom';
import getUserRole from '../../helpers/getUserRole';

const PrivateRoute = ({ children }) => {
	const userRole = getUserRole();
	console.log(children);
	return userRole === 'admin' ? children : <Navigate to='/courses' />;
};

export default PrivateRoute;
