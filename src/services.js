export const fetchCourses = () => {
	return fetch('http://localhost:4000/courses/all')
		.then((response) => response.json())
		.catch((error) => {
			console.error('Error fetching courses:', error);
		});
};

export const fetchAuthors = () => {
	return fetch('http://localhost:4000/authors/all')
		.then((response) => response.json())
		.catch((error) => {
			console.error('Error fetching authors:', error);
		});
};

export const loginUser = async (userData) => {
	try {
		const response = await fetch('http://localhost:4000/login/', {
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
