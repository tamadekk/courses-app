import { ADD_AUTHORS, ADD_AUTHOR } from './types';

export const authorsInitialState = [];

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case ADD_AUTHORS:
			return [...state, ...action.payload];
		case ADD_AUTHOR:
			return [...state, action.payload];
		default:
			return state;
	}
};
