import styles from './EmptyCourseList.module.css';
import Button from '../../common/Button/Button';

const EmptyCourseList = ({ tittle, message }) => {
	return (
		<div className={styles.wrapper}>
			<h1>{tittle}</h1>
			<p>{message}</p>
			<Button buttonText='Add New Course' category='text' />
		</div>
	);
};

export default EmptyCourseList;
