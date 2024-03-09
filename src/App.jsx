import { useState, useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { mockedCoursesList, mockedAuthorsList } from './constants';

import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Login from './components/Login/Login.jsx';
import Registration from './components/Registration/Registration.jsx';
import CreateCourse from './components/CreateCourse/CreateCourse.jsx';

const App = () => {
	const [isAuthenticated, setAuthenticated] = useState(false);
	const [userData, setUserData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [courses, setCourses] = useState([]);
	const [authors, setAuthors] = useState([]);
	const [isValid, setIsValid] = useState(true);

	useEffect(() => {
		setCourses(mockedCoursesList);
	}, []);

	useEffect(() => {
		setAuthors(mockedAuthorsList);
	}, []);

	const handleTest = () => {
		setAuthenticated(!isAuthenticated);
	};
	if (courses.length === 0) return <h1>No Data</h1>;
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
								userData={userData}
							/>
							<Outlet />
						</>
					}
				>
					<Route
						index
						element={
							<Courses
								courses={courses}
								authors={authors}
								isAuthenticated={isAuthenticated}
							/>
						}
					/>
					<Route
						path=':courseId'
						element={<CourseInfo courses={courses} authors={authors} />}
					/>
				</Route>
				<Route
					path='/login'
					element={
						<Login
							isValid={isValid}
							setIsValid={setIsValid}
							userData={userData}
							setUserData={setUserData}
						/>
					}
				/>
				<Route
					path='/registration'
					element={
						<Registration
							isValid={isValid}
							setIsValid={setIsValid}
							userData={userData}
							setUserData={setUserData}
						/>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<CreateCourse
							setCourses={setCourses}
							authors={authors}
							setAuthors={setAuthors}
							isValid={isValid}
							setIsValid={setIsValid}
						/>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
