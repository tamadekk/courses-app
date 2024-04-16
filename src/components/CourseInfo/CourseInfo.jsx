import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getCourses, getAuthors } from '../../store/selector';

import formatDate from '../../helpers/formatDate';
import formatDuration from '../../helpers/formatDuration';

import Button from '../../common/Button/Button';

import styles from './CourseInfo.module.css';

const CourseInfo = () => {
	const { courseId } = useParams();
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);

	const item = courses.find((item) => item.id === courseId);
	const getAuthorsFiltered = (authors) => {
		return authors
			.filter((el) => item.authors.includes(el.id))
			.map((el) => el.name)
			.join(',');
	};

	return (
		<div>
			<div className={styles.container}>
				<h1>{item.title}</h1>

				<div className={styles.card}>
					<div>
						<h1>Description:</h1>
						<p>{item.description}</p>
					</div>
					<div className={styles.div_hr}>
						<p>
							<b>ID:</b> {item.id}
						</p>

						<p>
							<b>Duration:</b> <span>{formatDuration(item.duration)}</span>
						</p>
						<p>
							<b>Created:</b> <span>{formatDate(item.creationDate)}</span>
						</p>
						<p>
							<b>Authors:</b>
							<span>{getAuthorsFiltered(authors)}</span>
						</p>
					</div>
					<div className={styles.buttonContainer}>
						<Link to='/courses/'>
							<Button buttonText='Back' type='text' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
