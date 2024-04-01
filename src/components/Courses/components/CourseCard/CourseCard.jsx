import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import propTypes from 'prop-types';

import { DELETE_COURSE } from '../../../../store/courses/types';
import { getCourses, getAuthors } from '../../../../store/selector';

import formatDate from '../../../../helpers/formatDate';
import formatDuration from '../../../../helpers/formatDuration';

import Button from '../../../../common/Button/Button';

import editButtonImage from '../../../../assets/icons/editButton.svg';
import deleteButtonImage from '../../../../assets/icons/trashbinButton.svg';

import styles from './CourseCard.module.css';

const CourseCard = ({ isAuthenticated }) => {
	const dispatch = useDispatch();
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);

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
										<Button buttonText='Show Course' type='text' />
									</Link>
									<Button icon={editButtonImage} type='image' />
									<Button
										icon={deleteButtonImage}
										type='image'
										onClick={() =>
											dispatch({ type: DELETE_COURSE, payload: item.id })
										}
									/>
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
										<Button buttonText='Show Course' type='text' />
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
	isAuthenticated: propTypes.bool.isRequired,
};
export default CourseCard;
