import { ADD_COURSES, ADD_COURSE, DELETE_COURSE, UPDATE_COURSE } from './types';

export const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case ADD_COURSES:
			return [...state, ...action.payload];
		case ADD_COURSE:
			return [...state, action.payload];
		case DELETE_COURSE:
			return state.filter((course) => course.id !== action.payload);
		case UPDATE_COURSE:
			return state.map((course) =>
				course.id === action.payload.id ? action.payload : course
			);
		default:
			return state;
	}
};
