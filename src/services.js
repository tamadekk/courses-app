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
