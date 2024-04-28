import { useSelector } from 'react-redux';
import { selectUserRole } from '../store/selector';

//getUser -> selectUser
const useUserRole = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const currentUser = useSelector(selectUserRole);
	return currentUser ? currentUser.role : '';
};

export default useUserRole;
