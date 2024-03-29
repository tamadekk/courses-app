import { FETCH_AUTHORS } from './types';

const initialState = {
	authors: [],
};

export const authorsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_AUTHORS:
			return { ...state, authors: action.payload };
		default:
			return state;
	}
};
