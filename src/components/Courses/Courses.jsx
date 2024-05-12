import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import propTypes from 'prop-types';

import { getCourses, getUser, selectUserRole } from '../../store/selector';

import { getCurrentUser } from '../../store/users/thunk';

import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from '../../common/SearchBar/SearchBar';
import Button from '../../common/Button/Button';

import styles from '../Courses/Courses.module.css';

const Courses = ({ isAuthenticated, setAuthenticated }) => {
	const [querry, setQuery] = useState(null);
	const [filteredCourses, setFilteredCourses] = useState(null);
	const courses = useSelector(getCourses);
	const userData = useSelector(getUser);
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setAuthenticated(true);
		} else {
			if (location.pathname !== '/registration') {
				navigate('/login');
			}
		}
	}, [isAuthenticated, navigate, setAuthenticated, location.pathname]);

	useEffect(() => {
		if (userData.isAuth === false) {
			dispatch(getCurrentUser());
		}
	}, [dispatch, userData]);

	const currentUserRole = useSelector(selectUserRole);

	const onSearchChange = (input) => {
		setQuery(input.target.value);
	};
	const getFilteredCourse = (courses, lowercasedData) => {
		return courses.filter((el) =>
			authorAttributes.some((item) =>
				String(el[item]).toLowerCase().includes(lowercasedData)
			)
		);
	};
	const searchHandlerButton = () => {
		if (querry === null) return;
		const lowercasedData = querry.toLowerCase();
		const courseFiltered = getFilteredCourse(courses, lowercasedData);
		setFilteredCourses(courseFiltered);
	};

	const authorAttributes = [
		'id',
		'title',
		'description',
		'duration',
		'authors',
		'creationDate',
	];
	if (courses.length > 0) {
		return (
			<div className={styles.container}>
				<div>
					<div className={styles.SeachBarRow}>
						<SearchBar
							onSearchChange={onSearchChange}
							buttonHandler={searchHandlerButton}
						/>

						{currentUserRole === 'admin' && (
							<Link to='/courses/add'>
								<Button buttonText='Add new course' type='text' />
							</Link>
						)}
					</div>

					<CourseCard
						courses={filteredCourses !== null ? filteredCourses : courses}
						isAuthenticated={isAuthenticated}
					/>
				</div>
			</div>
		);
	} else {
		return (
			<EmptyCourseList
				title='Your list is empty!'
				message='Please use Add New Course button to add your first course'
			/>
		);
	}
};

Courses.propTypes = {
	isAuthenticated: propTypes.bool.isRequired,
	setAuthenticated: propTypes.func.isRequired,
};

export default Courses;
