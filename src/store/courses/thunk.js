import { addCourse, deleteCourse, updateCourse } from '../../services';

import {
	addCourseAction,
	deleteCourseAction,
	updateCourseAction,
} from '../courses/actions';

export const performAddCourse = (newCourse, userToken) => {
	return async function (dispatch) {
		try {
			const response = await addCourse(newCourse, userToken);
			if (response) dispatch(addCourseAction(response));
		} catch (error) {
			console.log(
				'Error during deleting the course from the store -> thunk.js',
				error
			);
		}
	};
};

export const performUpdateCourse = (newCourse, userToken, courseID) => {
	return async function (dispatch) {
		try {
			const response = await updateCourse(newCourse, userToken, courseID);
			if (response) dispatch(updateCourseAction(response));
		} catch (error) {
			console.log(
				'Error during deleting the course from the store -> thunk.js',
				error
			);
		}
	};
};

export const performCourseDelete = (courseID, userToken) => {
	return async function (dispatch) {
		try {
			const response = await deleteCourse(courseID, userToken);
			if (response.ok) dispatch(deleteCourseAction(courseID));
		} catch (error) {
			console.log(
				'Error during deleting the course from the store -> thunk.js',
				error
			);
		}
	};
};
