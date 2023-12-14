import Button from '../../common/Button/Button';
import styles from '../Courses/Courses.module.css';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';

const Courses = (mockedCoursesList, mockedAuthorsList) => {
	if (!CourseCard)
		return (
			<div>
				<div className={styles.wrapper}>
					<SearchBar />
					<Button buttonText='Search' />
				</div>
			</div>
		);
	else {
		return (
			<div className={styles.wrapperNOCOURSE}>
				<h1>Your list is empty!</h1>
				<p>Please use 'Add New Course' button to add your first course</p>
				<Button buttonText='Add New Course' />
			</div>
		);
	}
};

export default Courses;
