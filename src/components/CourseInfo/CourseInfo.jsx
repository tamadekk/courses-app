import { useState } from 'react';

import Button from '../../common/Button/Button';

import styles from './CourseInfo.module.css';

import formatDate from '../../helpers/formatDate';
import formatDuration from '../../helpers/formatDuration';

const CourseInfo = ({ course, author, ShowCourseInfo, selectedCourseID }) => {
	const [isToogled, setIsToogled] = useState(false);

	const item = course.find((item) => item.id === selectedCourseID);
	return (
		<div>
			<div className={styles.container}>
				<h1>{item.title}</h1>

				<div className={styles.card}>
					<div>
						<h1>Description:</h1>
						<p>{item.description}</p>
					</div>
					<hr />
					<div>
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
							<span>
								{author
									.filter((el) => item.authors.includes(el.id))
									.map((el) => el.name)
									.join(',')}
							</span>
						</p>
					</div>
					<div className={styles.buttonContainer}>
						<Button
							onClick={() => {
								setIsToogled(!isToogled);
								ShowCourseInfo(true);
							}}
							buttonText='Back'
							category='text'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CourseInfo;
