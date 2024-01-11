import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import styles from '../Courses/Courses.module.css';

const Courses = ({ course, author, ShowCourseInfo }) => {
	if (course)
		return (
			<div>
				<SearchBar />
				<div className={styles.wrapper}>
					<CourseCard
						course={course}
						author={author}
						ShowCourseInfo={ShowCourseInfo}
					/>
				</div>
			</div>
		);
	else return <EmptyCourseList />;
};

export default Courses;
