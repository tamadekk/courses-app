import styles from './EmptyCourseList.module.css';
import Button from '../../common/Button/Button';

const EmptyCourseList = () => {
	return (
		<div className={styles.wrapper}>
			<h1>Your list is empty!</h1>
			<p>Please use 'Add New Course' button to add your first course</p>
			<Button buttonText='Add New Course' category='text' />
		</div>
	);
};

export default EmptyCourseList;
