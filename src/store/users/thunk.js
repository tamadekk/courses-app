import { getUserRoleAction, userLogOutAcion } from './actions';

import { getUser, userLogOut } from '../../services';

export const getCurrentUser = () => {
	return async function (dispatch) {
		try {
			const response = await getUser();
			dispatch(getUserRoleAction(response));
		} catch (error) {
			console.log(
				'Error happened during getting a current user, error message: ',
				error
			);
		}
	};
};

export const performLogout = (token) => {
	return async function (dispatch) {
		try {
			const response = await userLogOut(token);
			if (response.ok) dispatch(userLogOutAcion());

			return response;
		} catch (error) {
			console.log('Error happened during logging out, error message: ', error);
		}
	};
};
