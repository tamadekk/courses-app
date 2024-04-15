import { ADD_USER, USER_LOGOUT } from './types';

export const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case ADD_USER:
			const { name, email, token } = action.payload;
			if ('token' in action.payload) {
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

		default:
			return state;
	}
};
