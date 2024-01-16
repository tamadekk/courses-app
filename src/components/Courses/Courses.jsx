// Courses.jsx
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import styles from '../Courses/Courses.module.css';

const Courses = ({ course, author, ShowCourseInfo, isAuthenticated }) => {
	if (course) {
		return (
			<div className={styles.container}>
				<div className={styles.courseCard}>
					<div className={styles.searchBar}>
						<SearchBar />
					</div>
					<CourseCard
						course={course}
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
