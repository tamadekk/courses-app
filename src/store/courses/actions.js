import {
	ADD_COURSE,
	DELETE_COURSE,
	SAVE_COURSES,
	FETCH_COURSES,
} from './types';

export const addCourseAction = (payload) => ({ type: ADD_COURSE, payload });
export const deleteCourseAction = (payload) => ({
	type: DELETE_COURSE,
	payload,
});
export const saveCoursesAction = (payload) => ({ type: SAVE_COURSES, payload });
export const loadCoursesAction = (payload) => ({
	type: FETCH_COURSES,
	payload,
});
