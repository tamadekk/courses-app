export const getCourses = (state) => state.courses;
export const getAuthors = (state) => state.authors;
export const getCourseDataById = (state, courseId) =>
	state.courses.find((course) => course.id === courseId);
export const getUser = (state) => state.user;
export const selectUserRole = (state) => state.user.role;
