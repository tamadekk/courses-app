import React, { useState } from 'react';

import PropType from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './CourseCard.module.css';

import Button from '../../../../common/Button/Button';

import formatDate from '../../../../helpers/formatDate';
import formatDuration from '../../../../helpers/formatDuration';

import editButtonImage from '../../../../assets/icons/editButton.svg';
import deleteButtonImage from '../../../../assets/icons/trashbinButton.svg';

const CourseCard = ({ courses, authors, isAuthenticated }) => {
	const [isToggled, setIsToggled] = useState(false);
	const toggleVisibility = () => {
		setIsToggled(!isToggled);
	};

	return (
		<div>
			{courses.map((item) => (
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
									{authors
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
							{isAuthenticated && (
								<div className={styles.buttons}>
									<Link to={`/courses/${item.id}`}>
										<Button
											onClick={toggleVisibility}
											buttonText='Show Course'
										/>
									</Link>
									<Button icon={editButtonImage} />
									<Button icon={deleteButtonImage} />
								</div>
							)}
							{!isAuthenticated && (
								<div className={styles.buttons}>
									<Link
										to={{
											pathname: `/courses/${item.id}`,
											courses,
										}}
									>
										<Button
											onClick={toggleVisibility}
											buttonText='Show Course'
										/>
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

CourseCard.proptype = {
	courses: PropType.arrayOf(PropType.number, PropType.string),
	authors: PropType.arrayOf(PropType.number, PropType.string),
	isAuthenticated: PropType.bool,
};
export default CourseCard;
