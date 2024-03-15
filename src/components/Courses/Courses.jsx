import React, { useState } from 'react';

import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from '../../common/SearchBar/SearchBar';

import Button from '../../common/Button/Button';

import styles from '../Courses/Courses.module.css';

const Courses = ({ courses, authors, isAuthenticated }) => {
	const [querry, setQuery] = useState(null);
	const [filteredCourses, setFilteredCourses] = useState(null);
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
							<Button buttonText='Add new course' category='text' />
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
	courses: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.string.isRequired,
			title: propTypes.string.isRequired,
			description: propTypes.string.isRequired,
			creationDate: propTypes.string.isRequired,
			duration: propTypes.number.isRequired,
			authors: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
		}).isRequired
	),
	authors: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.string.isRequired,
			name: propTypes.string.isRequired,
		}).isRequired
	).isRequired,
	isAuthenticated: propTypes.bool.isRequired,
};

export default Courses;
