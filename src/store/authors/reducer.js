import { FETCH_AUTHORS_SUCCESS } from './types';

const initialState = {
	authors: [],
};

export const authorsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_AUTHORS_SUCCESS:
			return { ...state, authors: action.payload };
		default:
			return state;
	}
};
