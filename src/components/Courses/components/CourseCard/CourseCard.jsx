import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import propTypes from 'prop-types';

import { performCourseDelete } from '../../../../store/courses/thunk';

import { getAuthors, selectUserRole } from '../../../../store/selector';

import formatDate from '../../../../helpers/formatDate';
import formatDuration from '../../../../helpers/formatDuration';

import Button from '../../../../common/Button/Button';

import editButtonImage from '../../../../assets/icons/editButton.svg';
import deleteButtonImage from '../../../../assets/icons/trashbinButton.svg';

import styles from './CourseCard.module.css';

const CourseCard = ({ isAuthenticated, courses }) => {
	const dispatch = useDispatch();
	const authors = useSelector(getAuthors);
	const currentUserRole = useSelector(selectUserRole);

	const handleDeleteCourse = (courseID) => {
		dispatch(performCourseDelete(courseID));
	};
	const handleEditCourse = (courseID) => {};
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
							<div className={styles.buttons}>
								<Link to={`/courses/${item.id}`}>
									<Button buttonText='Show Course' type='text' />
								</Link>
								{currentUserRole === 'admin' && (
									<>
										<Link to='/update'>
											<Button
												icon={editButtonImage}
												type='image'
												onClick={() => handleEditCourse(item.id)}
											/>
										</Link>
										<Button
											icon={deleteButtonImage}
											type='image'
											onClick={() => handleDeleteCourse(item.id)}
										/>
									</>
								)}
							</div>
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
