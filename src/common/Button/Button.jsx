import styles from './Button.module.css';
function Button(props) {
	return (
		<button onClick={props.onClick} className={styles.button}>
			{props.buttonText}
		</button>
	);
}
export default Button;
