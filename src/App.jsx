import { useState } from 'react';

import { mockedCoursesList, mockedAuthorsList } from './constants';

import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CourseInfo from './components/CourseInfo/CourseInfo';

import styles from './components/Courses/Courses.module.css';
function App() {
	const [isActive, setActive] = useState(true);
	const [selected, setSelected] = useState('');
	const ShowCourseInfo = (status, courseID) => {
		setActive(status);
		setSelected(courseID);
	};

	return (
		<div>
			<Header />
			{isActive ? (
				<div className={styles.wrapper}>
					<Courses
						course={mockedCoursesList}
						author={mockedAuthorsList}
						ShowCourseInfo={ShowCourseInfo}
					/>
				</div>
			) : (
				<CourseInfo
					course={mockedCoursesList}
					author={mockedAuthorsList}
					ShowCourseInfo={ShowCourseInfo}
					selectedCourseID={selected}
				/>
			)}
		</div>
	);
}

export default App;
