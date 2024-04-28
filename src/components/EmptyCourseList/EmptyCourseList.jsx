import { Link } from 'react-router-dom';

import getUserRole from '../../helpers/getUserRole';

import propTypes from 'prop-types';

import styles from './EmptyCourseList.module.css';
import Button from '../../common/Button/Button';

const EmptyCourseList = ({ tittle, message }) => {
	return (
		<div className={styles.wrapper}>
			<h1>{tittle}</h1>
			<p>{message}</p>
			{getUserRole() === 'admin' ? (
				<Link to='/courses/add'>
					<Button buttonText='Add new course' type='text' />
				</Link>
			) : (
				<p>
					You don't have permissions to create a course. Please log in as ADMIN
				</p>
			)}
		</div>
	);
};
EmptyCourseList.propTypes = {
	title: propTypes.string.isRequired,
	message: propTypes.string.isRequired,
};
export default EmptyCourseList;
