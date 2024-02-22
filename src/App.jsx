import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { mockedCoursesList, mockedAuthorsList } from './constants';

import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Login from './components/Login/Login.jsx';
import Registration from './components/Registration/Registration.jsx';

const App = () => {
	const [isAuthenticated, setAuthenticated] = useState(false);
	const name = 'Vladyslav Raduta';

	const handleTest = () => {
		setAuthenticated(!isAuthenticated);
	};

	return (
		<div>
			<Routes>
				<Route
					path='/courses'
					element={
						<>
							<Header
								isAuthenticated={isAuthenticated}
								handleTest={handleTest}
								name={name}
							/>
							<Outlet />
						</>
					}
				>
					<Route
						index
						element={
							<Courses
								course={mockedCoursesList}
								author={mockedAuthorsList}
								isAuthenticated={isAuthenticated}
							/>
						}
					/>
					<Route
						path=':courseId'
						element={
							<CourseInfo
								course={mockedCoursesList}
								author={mockedAuthorsList}
							/>
						}
					/>
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
			</Routes>
		</div>
	);
};

export default App;
