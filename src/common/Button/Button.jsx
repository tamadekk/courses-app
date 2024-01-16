import React from 'react';
import styles from './Button.module.css';
import editButtonImage from './components/editButton/editButton.svg';
import deleteButtonImage from './components/trashbin/trashbinButton.svg';

function Button(props) {
	let content;
	let buttonStyle = styles.button;

	switch (props.category) {
		case 'text':
			content = props.buttonText;
			break;
		case 'editCourse':
			content = (
				<img src={editButtonImage} alt='Edit Button' className={styles.img} />
			);
			buttonStyle = styles.iconButton;
			break;
		case 'deleteCourse':
			content = (
				<img
					src={deleteButtonImage}
					alt='Delete Button'
					className={styles.img}
				/>
			);
			buttonStyle = styles.iconButton;
			break;
		default:
			content = '';
	}

	return (
		<button onClick={props.onClick} className={buttonStyle}>
			{content}
		</button>
	);
}

export default Button;
