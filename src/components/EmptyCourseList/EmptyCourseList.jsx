import styles from './EmptyCourseList.module.css';
import Button from '../../common/Button/Button';

const EmptyCourseList = () => {
	return (
		<div className={styles.wrapperNOCOURSE}>
			<h1>Your list is empty!</h1>
			<p>Please use 'Add New Course' button to add your first course</p>
			<Button buttonText='Add New Course' />
		</div>
	);
};

export default EmptyCourseList;
