import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import propTypes from 'prop-types';

import { getCourses, getAuthors } from '../../store/selector';

import { fetchCoursesData, fetchAuthorsData } from '../../services.js';

import { addCourseAction } from '../../store/courses/actions.js';
import { addAuthorAction } from '../../store/authors/actions.js';

import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from '../../common/SearchBar/SearchBar';
import Button from '../../common/Button/Button';

import styles from '../Courses/Courses.module.css';

const Courses = ({ isAuthenticated, setAuthenticated }) => {
	const [querry, setQuery] = useState(null);
	const [filteredCourses, setFilteredCourses] = useState(null);
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);
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
	}, [isAuthenticated, navigate, setAuthenticated]);

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
		if (!querry) return;
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
						<Link to='/courses/add'>
							<Button buttonText='Add new course' type='text' />
						</Link>
					</div>

					<CourseCard
						courses={filteredCourses !== null ? filteredCourses : courses}
						authors={authors}
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
};

export default Courses;
