import React from 'react';
import styles from './Button.module.css';

function Button(props) {
	let content = props.buttonText;
	let buttonStyle = styles.button;

	if (props.icon) {
		content = <img src={props.icon} alt={props.icon} className={styles.img} />;
		buttonStyle = styles.iconButton;
	}

	return (
		<button onClick={props.onClick} className={buttonStyle} type={props.type}>
			{content}
		</button>
	);
}

export default Button;
