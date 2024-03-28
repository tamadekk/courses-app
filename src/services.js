export const fetchCoursesData = () => {
	return fetch('http://localhost:4000/courses/all')
		.then((response) => response.json())
		.catch((error) => {
			console.error('Error fetching courses:', error);
		});
};

export const fetchAuthorsData = () => {
	return fetch('http://localhost:4000/authors/all')
		.then((response) => response.json())
		.catch((error) => {
			console.error('Error fetching authors:', error);
		});
};
