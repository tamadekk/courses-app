import React, { useState } from 'react';

import Button from '../../../../common/Button/Button';

import styles from './CourseCard.module.css';

import formatDate from '../../../../helpers/formatDate';
import formatDuration from '../../../../helpers/formatDuration';

import editButtonImage from '../../../../assets/icons/editButton.svg';
import deleteButtonImage from '../../../../assets/icons/trashbinButton.svg';

const CourseCard = ({ course, author, showCourseInfo, isAuthenticated }) => {
	const [isToggled, setIsToggled] = useState(false);

	return (
		<div>
			{course.map((item) => (
				<div className={styles.wrapper} key={item.id}>
					<div className={styles.firstsection}>
						<h1>{item.title}</h1>
						<p>{item.description}</p>
					</div>
					<div className={styles.secondsection}>
						<div>
							<p>
								<b>Authors: </b>
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
							{isAuthenticated ? (
								<div className={styles.buttons}>
									<Button
										onClick={() => {
											setIsToggled(!isToggled);
											showCourseInfo(false, item.id);
										}}
										buttonText='Show Course'
										category='text'
									/>
									<Button icon={editButtonImage} />
									<Button icon={deleteButtonImage} />
								</div>
							) : (
								<div className={styles.buttons}>
									<Button
										onClick={() => {
											setIsToggled(!isToggled);
											showCourseInfo(false, item.id);
										}}
										buttonText='Show Course'
									/>
								</div>
							)}

							{isToggled && showCourseInfo(false, item.id)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CourseCard;
