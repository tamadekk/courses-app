import React, { useState } from 'react';

import Button from '../../../../common/Button/Button';

import styles from './CourseCard.module.css';

import formatDate from '../../../../helpers/formatDate';
import formatDuration from '../../../../helpers/formatDuration';

const CourseCard = ({ course, author, ShowCourseInfo }) => {
	const [isToogled, setIsToogled] = useState(false);

	return (
		<div>
			{course.map((item) => {
				return (
					<div className={styles.wrapper} key={item.id}>
						<div className={styles.item1}>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
						</div>
						<div className={styles.item2}>
							<div>
								<p>
									<b>Authors:</b>
									<span>
										{author
											.filter((el) => item.authors.includes(el.id))
											.map((el) => el.name)
											.join(',')}
									</span>
								</p>
								<p>
									<b>Duration:</b> <span>{formatDuration(item.duration)}</span>
								</p>
								<p>
									<b>Created:</b> <span>{formatDate(item.creationDate)}</span>
								</p>
								<Button
									onClick={() => {
										setIsToogled(!isToogled);
										ShowCourseInfo(false, item.id);
									}}
									buttonText='Show Course'
								/>
								{isToogled ? ShowCourseInfo(false, item.id) : null}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CourseCard;
