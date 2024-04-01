import { ADD_USER, USER_LOGOUT } from './types';

const initialState = {
	authors: [],
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return { ...state, user: action.payload };
		case USER_LOGOUT:
			return { user: null };
		default:
			return state;
	}
};
