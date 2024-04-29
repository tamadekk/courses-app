import { addCourse, deleteCourse, updateCourse } from '../../services';
import {
	addCourseAction,
	deleteCourseAction,
	updateCourseAction,
} from '../courses/actions';

const handleError = (error) => {
	console.error('Error occurred while performing action:', error);
};

export const performAddCourse = (newCourse, userToken) => {
	return async (dispatch) => {
		try {
			const response = await addCourse(newCourse, userToken);
			if (response) dispatch(addCourseAction(response));
		} catch (error) {
			handleError(error);
		}
	};
};

export const performUpdateCourse = (updatedCourse, userToken, courseID) => {
	return async (dispatch) => {
		try {
			const response = await updateCourse(updatedCourse, userToken, courseID);
			if (response) dispatch(updateCourseAction(response));
		} catch (error) {
			handleError(error);
		}
	};
};

export const performCourseDelete = (courseID, userToken) => {
	return async (dispatch) => {
		try {
			const response = await deleteCourse(courseID, userToken);
			if (response.ok) {
				dispatch(deleteCourseAction(courseID));
			}
		} catch (error) {
			handleError(error);
		}
	};
};
