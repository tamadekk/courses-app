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

export const userLogOut = async (userToken) => {
	try {
		const response = await fetch(`${BASE_API_URL}/logout/`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${userToken}`,
			},
		});
		return response;
	} catch (error) {
		throw new Error('Error during logout: ' + error.message);
	}
};

export const getUser = async () => {
	try {
		const token = localStorage.getItem('token');
		const response = await fetch(`${BASE_API_URL}/users/me`, {
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error getting user data:', error);
	}
};

export const deleteCourse = async (courseID) => {
	try {
		const userToken = localStorage.getItem('token');
		const response = await fetch(`${BASE_API_URL}/courses/${courseID}`, {
			method: 'DELETE',
			headers: {
				id: courseID,
				'Content-type': 'application/json',
				Authorization: userToken,
			},
		});
		return response;
	} catch (error) {
		console.log('Error during deleting the course from back-end side!');
	}
};
