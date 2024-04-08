import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

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
	const token = localStorage.getItem('token');

	const [isValid, setIsValid] = useState(true);

	return (
		<div>
			<Routes>
				{token ? (
					<>
						<Route
							path='/'
							element={
								<>
									<Header />
									<Courses
										isAuthenticated={isAuthenticated}
										setAuthenticated={setAuthenticated}
									/>
									<Outlet />
								</>
							}
						/>
					</>
				) : (
					<>
						<Route
							path='/'
							element={<Login isValid={isValid} setIsValid={setIsValid} />}
						/>
					</>
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
