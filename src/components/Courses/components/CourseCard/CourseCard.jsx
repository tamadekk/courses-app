import React from 'react';
import Button from '../../../../common/Button/Button';
import { mockedCoursesList, mockedAuthorsList } from '../../../../constants';
import styles from './CourseCard.module.css';

const CourseCard = (props) => {
	const data = mockedCoursesList[0];
	const authors = mockedAuthorsList.filter((author) =>
		data.authors.includes(author.id)
	);
	// dur = duration
	function formatDuration(dur) {
		const hours = Math.floor(dur / 60);
		const minutes = dur % 60;
		const formattedHours = hours < 10 ? '0' + hours : hours;
		const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
		return `${formattedHours}:${formattedMinutes} hours`;
	}
	// dat = date
	function formatDate(dat) {
		const parts = dat.split('/');
		return parts.length === 3 ? `${parts[0]}.${parts[1]}.${parts[2]}` : dat;
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.item1}>
				<h1>{data.title}</h1>
				<p>{data.description}</p>
			</div>

			<div className={styles.item2}>
				<div>
					<p>
						<b>Authors:</b>{' '}
						<span>{authors.map((author) => author.name).join(', ')}</span>
					</p>
					<p>
						<b>Duration:</b> <span>{formatDuration(data.duration)}</span>
					</p>
					<p>
						<b>Created:</b> <span>{formatDate(data.creationDate)}</span>
					</p>
					<Button buttonText='Show Course' />
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
