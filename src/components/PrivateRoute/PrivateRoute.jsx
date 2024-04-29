import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUserRole } from '../../store/selector';

const PrivateRoute = ({ children }) => {
	const userRole = useSelector(selectUserRole);
	return userRole === 'admin' ? children : <Navigate to='/courses' />;
};

export default PrivateRoute;
