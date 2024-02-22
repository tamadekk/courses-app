import { useState } from 'react';
import { Link } from 'react-router-dom';

import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from '../../common/SearchBar/SearchBar';

import Button from '../../common/Button/Button';

import styles from '../Courses/Courses.module.css';
import CreateCourse from '../CreateCourse/CreateCourse';

const Courses = ({ course, author, isAuthenticated }) => {
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
					<div className={styles.SeachBarRow}>
						<SearchBar
							onSearchChange={onSearchChange}
							buttonHandler={buttonHandler}
						/>
						<Link to='courses/add' element={CreateCourse}>
							<Button buttonText='Add new course' category='text' />
						</Link>
					</div>

					<CourseCard
						course={filteredCourses !== null ? filteredCourses : course}
						author={author}
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
