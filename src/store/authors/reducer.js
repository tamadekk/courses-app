import { ADD_AUTHORS } from './types';

export const authorsInitialState = [];

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case ADD_AUTHORS:
			return action.payload;
		default:
			return state;
	}
};
