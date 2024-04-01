import { ADD_COURSE, DELETE_COURSE } from './types';

const initialState = {
	courses: [],
};

export const coursesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_COURSE:
			return { ...state, courses: action.payload };
		case DELETE_COURSE:
			const updatedCourses = state.courses.filter(
				(course) => course.id !== action.payload
			);
			return { ...state, courses: updatedCourses };
		default:
			return state;
	}
};
