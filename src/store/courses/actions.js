import { ADD_COURSE, ADD_COURSES, DELETE_COURSE } from './types';

export const addCourseAction = (payload) => ({ type: ADD_COURSE, payload });
export const addCoursesAction = (payload) => ({ type: ADD_COURSES, payload });
export const deleteCourseAction = (payload) => ({
	type: DELETE_COURSE,
	payload,
});
