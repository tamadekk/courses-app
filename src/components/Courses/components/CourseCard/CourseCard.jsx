import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Button from '../../../../common/Button/Button';

import styles from './CourseCard.module.css';

import formatDate from '../../../../helpers/formatDate';
import formatDuration from '../../../../helpers/formatDuration';

import editButtonImage from '../../../../assets/icons/editButton.svg';
import deleteButtonImage from '../../../../assets/icons/trashbinButton.svg';

const CourseCard = ({ course, author, isAuthenticated }) => {
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
									<Link to={`/courses/${item.id}`}>
										<Button
											onClick={() => {
												setIsToggled(!isToggled);
											}}
											buttonText='Show Course'
										/>
									</Link>
									<Button icon={editButtonImage} />
									<Button icon={deleteButtonImage} />
								</div>
							) : (
								<div className={styles.buttons}>
									<Link to={`/courses/${item.id}`}>
										<Button
											onClick={() => {
												setIsToggled(!isToggled);
											}}
											buttonText='Show Course'
										/>
									</Link>
								</div>
							)}

							{isToggled}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CourseCard;
