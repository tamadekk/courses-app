import React, { useState } from 'react';

import propTypes from 'prop-types';

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
											type='text'
										/>
									</Link>
									<Button icon={editButtonImage} type='image' />
									<Button icon={deleteButtonImage} type='image' />
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
											type='text'
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

CourseCard.propTypes = {
	courses: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.string.isRequired,
			title: propTypes.string.isRequired,
			description: propTypes.string.isRequired,
			creationDate: propTypes.string.isRequired,
			duration: propTypes.number.isRequired,
			authors: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
		}).isRequired
	),
	authors: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.string.isRequired,
			name: propTypes.string.isRequired,
		}).isRequired
	).isRequired,
	isAuthenticated: propTypes.bool.isRequired,
};
export default CourseCard;
