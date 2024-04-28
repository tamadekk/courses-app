import { deleteCourse } from '../../services';

import { deleteCourseAction } from '../courses/actions';

export const performCourseDelete = (courseID) => {
	return async function (dispatch) {
		try {
			const response = await deleteCourse(courseID);
			if (response.ok) dispatch(deleteCourseAction(courseID));
		} catch (error) {
			console.log(
				'Error during deleting the course from the store -> thunk.js',
				error
			);
		}
	};
};
