import {
	ADD_COURSE,
	DELETE_COURSE,
	SAVE_COURSES,
	FETCH_COURSES,
} from './types';

const initialState = {
	courses: [],
};

export const coursesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_COURSES:
			return { ...state, courses: action.payload };

		case ADD_COURSE:
			return { ...state, courses: [...state.courses, action.payload] };
		case DELETE_COURSE:
			return {
				...state,
				courses: state.courses.filter(
					(course) => course.id !== action.payload.id
				),
			};
		case FETCH_COURSES:
			return [{ ...state, courses: action.payload }];
		default:
			return state;
	}
};
