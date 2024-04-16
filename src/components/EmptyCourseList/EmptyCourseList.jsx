import { Link } from 'react-router-dom';

import propTypes from 'prop-types';

import styles from './EmptyCourseList.module.css';
import Button from '../../common/Button/Button';

const EmptyCourseList = ({ tittle, message }) => {
	return (
		<div className={styles.wrapper}>
			<h1>{tittle}</h1>
			<p>{message}</p>
			<Link to='/courses/add'>
				<Button buttonText='Add new course' type='text' />
			</Link>
		</div>
	);
};
EmptyCourseList.propTypes = {
	title: propTypes.string.isRequired,
	message: propTypes.string.isRequired,
};
export default EmptyCourseList;
