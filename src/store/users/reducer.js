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
			const { name, email, token } = action.payload;
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
			return action.payload.result;

		default:
			return state;
	}
};
