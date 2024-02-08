import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import { mockedCoursesList, mockedAuthorsList } from './constants';

import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CourseInfo from './components/CourseInfo/CourseInfo';

import Login from './components/Login/Login.jsx';
import Registration from './components/Registration/Registration.jsx';

const App = () => {
	const [isAuthenticated, setAuthenticated] = useState(false);
	const [isActive, setActive] = useState(true);
	const [selected, setSelected] = useState('');

	const name = 'Vladyslav Raduta';

	const handleTest = () => {
		setAuthenticated(!isAuthenticated);
	};

	const showCourseInfo = (status, courseID) => {
		setActive(status);
		setSelected(courseID);
	};

	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Header
								isAuthenticated={isAuthenticated}
								handleTest={handleTest}
								name={name}
							/>
							{isActive ? (
								<Courses
									course={mockedCoursesList}
									author={mockedAuthorsList}
									showCourseInfo={showCourseInfo}
									isAuthenticated={isAuthenticated}
								/>
							) : (
								<CourseInfo
									course={mockedCoursesList}
									author={mockedAuthorsList}
									showCourseInfo={showCourseInfo}
									selectedCourseID={selected}
								/>
							)}
						</>
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
			</Routes>
		</div>
	);
};

export default App;
