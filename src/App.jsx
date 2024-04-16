import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCourses, fetchAuthors } from './services.js';

import { addCoursesAction } from './store/courses/actions.js';

import { addAuthorsAction } from './store/authors/actions.js';

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
	const dispatch = useDispatch();

	useEffect(() => {
		if (isAuthenticated)
			fetchCourses()
				.then((data) => {
					dispatch(addCoursesAction(data.result));
				})
				.catch((error) => {
					console.error('Error fetching courses:', error);
				});
	}, [dispatch, isAuthenticated]);

	useEffect(() => {
		if (isAuthenticated)
			fetchAuthors()
				.then((data) => {
					dispatch(addAuthorsAction(data.result));
				})
				.catch((error) => {
					console.error('Error fetching authors:', error);
				});
	}, [dispatch, isAuthenticated]);

	const isUserAuthorized = () => {
		const token = localStorage.getItem('token');
		if (token) return true;
	};

	const [isValid, setIsValid] = useState(true);
	return (
		<div>
			<Routes>
				{isUserAuthorized() && (
					<Route path='/' element={<Navigate to='/courses' />} />
				)}

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
						element={
							<Courses
								isAuthenticated={isAuthenticated}
								setAuthenticated={setAuthenticated}
							/>
						}
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
					element={<CreateCourse isValid={isValid} setIsValid={setIsValid} />}
				/>
			</Routes>
		</div>
	);
};

export default App;
