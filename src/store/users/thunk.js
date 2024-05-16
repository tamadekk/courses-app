import { getUserRoleAction, userLogOutAction } from './actions';
import { getUser, userLogOut } from '../../services';

export const getCurrentUser = () => {
	return async (dispatch) => {
		try {
			const response = await getUser();
			dispatch(getUserRoleAction(response));
		} catch (error) {
			console.error('Error occurred while getting the current user:', error);
		}
	};
};

export const performLogout = (token) => {
	return async (dispatch) => {
		try {
			const response = await userLogOut(token);
			if (response.ok) {
				dispatch(userLogOutAction());
			}
			return response;
		} catch (error) {
			console.error('Error occurred while logging out:', error);
		}
	};
};
