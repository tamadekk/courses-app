import styles from './Button.module.css';
function Button(props) {
	return <button className={styles.button}>{props.buttonText}</button>;
}
export default Button;
