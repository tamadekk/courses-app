import { ADD_COURSE, DELETE_COURSE } from './types';

export const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case ADD_COURSE:
			return [...action.payload];
		case DELETE_COURSE:
			return state.filter((course) => course.id !== action.payload);
		default:
			return state;
	}
};
