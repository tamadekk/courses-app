import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import styles from '../Courses/Courses.module.css';

import { useState } from 'react';

const Courses = ({ course, author, ShowCourseInfo, isAuthenticated }) => {
	const [data, setData] = useState(null);
	const [filteredCourses, setFilteredCourses] = useState(null);

	const getData = (input) => {
		setData(input.target.value);
	};

	const buttonHandler = () => {
		if (data === null) return course;
		const lowercasedData = data.toLowerCase();
		const coursefiltered = course.filter((el) =>
			[
				'id',
				'title',
				'description',
				'duration',
				'authors',
				'creationDate',
			].some((item) => String(el[item]).toLowerCase().includes(lowercasedData))
		);
		setFilteredCourses(coursefiltered);
	};

	if (course) {
		return (
			<div className={styles.container}>
				<div className={styles.courseCard}>
					<div className={styles.searchBar}>
						<SearchBar getData={getData} buttonHandler={buttonHandler} />
					</div>
					<CourseCard
						course={filteredCourses !== null ? filteredCourses : course}
						author={author}
						ShowCourseInfo={ShowCourseInfo}
						isAuthenticated={isAuthenticated}
					/>
				</div>
			</div>
		);
	} else {
		return <EmptyCourseList />;
	}
};

export default Courses;
