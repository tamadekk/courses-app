import { getUserToken } from './helpers/getUserToken';
const BASE_API_URL = 'http://localhost:4000';

export const fetchCourses = () => {
	return fetch(`${BASE_API_URL}/courses/all`)
		.then((response) => response.json())
		.catch((error) => {
			console.error('Error fetching courses:', error);
		});
};

export const fetchAuthors = () => {
	return fetch(`${BASE_API_URL}/authors/all`)
		.then((response) => response.json())
		.catch((error) => {
			console.error('Error fetching authors:', error);
		});
};

export const loginUser = async (userData) => {
	try {
		const response = await fetch(`${BASE_API_URL}/login/`, {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error('Error during login: ' + error.message);
	}
};

export const userRegistration = async (userData) => {
	try {
		const response = await fetch('http://localhost:4000/register/', {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();
		if (data.successful) {
			window.location.href = '/login';
		} else {
			console.error('Invalid data');
		}
	} catch (error) {
		console.error('Error during registration:', error);
	}
};
export const userLogOut = async () => {
	try {
		const response = await fetch(`${BASE_API_URL}/logout/`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: getUserToken(),
			},
		});
		return response;
	} catch (error) {
		throw new Error('Error during logout: ' + error.message);
	}
};

export const getUser = async () => {
	try {
		const response = await fetch(`${BASE_API_URL}/users/me`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: getUserToken(),
			},
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error getting user data:', error);
	}
};

export const addCourse = async (newCourse) => {
	try {
		const response = await fetch(`${BASE_API_URL}/courses/add`, {
			method: 'POST',
			body: JSON.stringify(newCourse),
			headers: {
				'Content-Type': 'application/json',
				Authorization: getUserToken(),
			},
		});

		if (!response.ok) {
			throw new Error(`Failed to add course: ${response.statusText}`);
		}
		const responseBody = await response.json();
		if (responseBody.successful) {
			return responseBody.result;
		} else {
			throw new Error('Failed to add course: Response indicates failure');
		}
	} catch (error) {
		console.error('Error during adding a new course: ', error);
		throw error;
	}
};

export const deleteCourse = async (courseID) => {
	try {
		const response = await fetch(`${BASE_API_URL}/courses/${courseID}`, {
			method: 'DELETE',
			headers: {
				id: courseID,
				'Content-type': 'application/json',
				Authorization: getUserToken(),
			},
		});
		return response;
	} catch (error) {
		console.error(
			'Error during deleting the course from back-end side!',
			error
		);
	}
};

export const updateCourse = async (updatedCourse, courseID) => {
	try {
		const response = await fetch(`${BASE_API_URL}/courses/${courseID}`, {
			method: 'PUT',
			body: JSON.stringify(updatedCourse),
			headers: {
				'Content-Type': 'application/json',
				Authorization: getUserToken(),
			},
		});

		if (!response.ok) {
			throw new Error(`Failed to add course: ${response.statusText}`);
		}
		const responseBody = await response.json();
		if (responseBody.successful) {
			return responseBody.result;
		} else {
			throw new Error('Failed to add course: Response indicates failure');
		}
	} catch (error) {
		console.error('Error during updating the course: ', error);
		throw error;
	}
};

export const addAuthor = async (newAuthor) => {
	try {
		const response = await fetch(`${BASE_API_URL}/authors/add`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: getUserToken(),
			},
			body: JSON.stringify(newAuthor),
		});
		if (!response.ok) {
			throw new Error(`Failed to add author: ${response.statusText}`);
		}
		const responseBody = await response.json();
		if (responseBody.successful) {
			return responseBody.result;
		} else {
			throw new Error('Failed to add author: Response indicates failure');
		}
	} catch (error) {
		console.error('Error during adding a new author: ', error);
		throw error;
	}
};

export const deleteAuthor = async (authorID) => {
	try {
		const response = await fetch(`${BASE_API_URL}/authors/${authorID}`, {
			method: 'DELETE',
			headers: {
				id: authorID,
				'Content-type': 'application/json',
				Authorization: getUserToken(),
			},
		});
		return response;
	} catch (error) {
		console.error(
			'Error during deleting the course from back-end side!',
			error
		);
	}
};
