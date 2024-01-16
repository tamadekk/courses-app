import { useState } from 'react';

import { mockedCoursesList, mockedAuthorsList } from './constants';

import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CourseInfo from './components/CourseInfo/CourseInfo';

const App = () => {
	const [isAuthenticated, setAuthenticated] = useState(false);
	const name = 'Vladyslav Raduta';

	const handleTest = () => {
		setAuthenticated(!isAuthenticated);
	};

	const [isActive, setActive] = useState(true);
	const [selected, setSelected] = useState('');
	const ShowCourseInfo = (status, courseID) => {
		setActive(status);
		setSelected(courseID);
	};

	return (
		<div>
			<Header
				isAuthenticated={isAuthenticated}
				handleTest={handleTest}
				name={name}
			/>
			{isActive ? (
				<Courses
					course={mockedCoursesList}
					author={mockedAuthorsList}
					ShowCourseInfo={ShowCourseInfo}
					isAuthenticated={isAuthenticated}
				/>
			) : (
				<CourseInfo
					course={mockedCoursesList}
					author={mockedAuthorsList}
					ShowCourseInfo={ShowCourseInfo}
					selectedCourseID={selected}
				/>
			)}
		</div>
	);
};

export default App;
