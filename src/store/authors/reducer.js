import { ADD_AUTHORS, ADD_AUTHOR, DELETE_AUTHOR } from './types';

export const authorsInitialState = [];

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case ADD_AUTHORS:
			return [...state, ...action.payload];
		case ADD_AUTHOR:
			return [...state, action.payload];
		case DELETE_AUTHOR:
			return state.filter((author) => author.id !== action.payload);
		default:
			return state;
	}
};
