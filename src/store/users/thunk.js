import { addUserAction } from './actions';

export const fetchUserData = () => async (dispatch) => {
	try {
		const token = localStorage.getItem('token');
		const response = await fetch('http://localhost:4000/users/me', {
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
		});
		const userData = await response.json();
		dispatch(addUserAction(userData));
	} catch (error) {
		console.error('Error fetching user data:', error);
	}
};
