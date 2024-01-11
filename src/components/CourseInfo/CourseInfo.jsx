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
			<div className={styles.wrapper}>
				<h1>{item.title}</h1>
				<div className={styles.innerwrapper}>
					<div className={styles.item1}>
						<h1>Description:</h1>
						<p>{item.description}</p>
					</div>

					<div className={styles.item2}>
						<div>
							<p>ID: {item.id}</p>

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
							<Button
								onClick={() => {
									setIsToogled(!isToogled);
									ShowCourseInfo(true);
								}}
								buttonText='Back'
							/>
							{isToogled ? ShowCourseInfo(true) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CourseInfo;
