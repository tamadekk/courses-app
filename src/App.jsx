import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';

import { fetchCoursesData, fetchAuthorsData } from './services.js';

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

	const navigate = useNavigate();
	useEffect(() => {
		fetchCoursesData()
			.then((data) => {
				setCourses(data);
			})
			.catch((error) => {
				console.error('Error fetching dfasfdasdf:', error);
			});

		fetchAuthorsData()
			.then((data) => {
				setAuthors(data);
			})
			.catch((error) => {
				console.error('Error fetching authors:', error);
			});
	}, []);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setAuthenticated(true);
		} else {
			if (window.location.pathname !== '/registration') {
				navigate('/login');
			}
		}
	}, [isAuthenticated, navigate]);

	if (courses.length === 0) return <h1>No Data</h1>;

	return (
		<div>
			<Routes>
				{isAuthenticated && <Route path='/courses' />}
				<Route
					path='/courses'
					element={
						<>
							<Header isAuthenticated={isAuthenticated} userData={userData} />
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
							userData={userData}
						/>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
