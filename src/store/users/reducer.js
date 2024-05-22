import { ADD_USER, GET_CURRENT_USER, USER_LOGOUT } from './types';

export const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case ADD_USER:
			const { name, email } = action.payload.user;
			const token = action.payload.result;
			if (action.payload.result) {
				return {
					isAuth: !!token,
					name,
					email,
					token,
				};
			} else return;

		case USER_LOGOUT:
			return {
				isAuth: false,
				name: '',
				email: '',
				token: '',
			};
		case GET_CURRENT_USER:
			return { ...action.payload.result, isAuth: true };

		default:
			return state;
	}
};
