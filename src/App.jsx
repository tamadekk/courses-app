import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCoursesData, fetchAuthorsData } from './services.js';

import { addCourseAction } from './store/courses/actions.js';
import { addAuthorAction } from './store/authors/actions.js';

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

	const [isValid, setIsValid] = useState(true);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		fetchCoursesData()
			.then((data) => {
				dispatch(addCourseAction(data.result));
			})
			.catch((error) => {
				console.error('Error fetching courses:', error);
			});
	}, [dispatch]);

	useEffect(() => {
		fetchAuthorsData()
			.then((data) => {
				dispatch(addAuthorAction(data.result));
			})
			.catch((error) => {
				console.error('Error fetching authors:', error);
			});
	}, [dispatch]);

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

	return (
		<div>
			<Routes>
				{isAuthenticated && <Route path='/courses' />}
				<Route
					path='/courses'
					element={
						<>
							<Header isAuthenticated={isAuthenticated} />
							<Outlet />
						</>
					}
				>
					<Route
						index
						element={<Courses isAuthenticated={isAuthenticated} />}
					/>
					<Route path=':courseId' element={<CourseInfo />} />
				</Route>
				<Route
					path='/login'
					element={<Login isValid={isValid} setIsValid={setIsValid} />}
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
