import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from '../../common/SearchBar/SearchBar';

import styles from '../Courses/Courses.module.css';

import { useState } from 'react';

const Courses = ({ course, author, showCourseInfo, isAuthenticated }) => {
	const [data, setData] = useState(null);
	const [filteredCourses, setFilteredCourses] = useState(null);

	const onSearchChange = (input) => {
		setData(input.target.value);
	};

	const getFilteredCourse = (course, lowercasedData) => {
		return (course = course.filter((el) =>
			authorAttributes.some((item) =>
				String(el[item]).toLowerCase().includes(lowercasedData)
			)
		));
	};

	const buttonHandler = () => {
		if (data === null) return course;
		const lowercasedData = data.toLowerCase();
		const courseFiltered = getFilteredCourse(course, lowercasedData);
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

	if (course.length > 0) {
		return (
			<div className={styles.container}>
				<div>
					<SearchBar
						onSearchChange={onSearchChange}
						buttonHandler={buttonHandler}
					/>

					<CourseCard
						course={filteredCourses !== null ? filteredCourses : course}
						author={author}
						showCourseInfo={showCourseInfo}
						isAuthenticated={isAuthenticated}
					/>
				</div>
			</div>
		);
	} else {
		return (
			<EmptyCourseList
				tittle='Your list is empty!'
				message='Please use Add New Course button to add your first course'
			/>
		);
	}
};

export default Courses;
