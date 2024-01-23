import styles from './Input.module.css';

const Input = ({ getData }) => {
	return (
		<div>
			<input
				className={styles.searchbar}
				type='text'
				placeholder='Input text'
				onChange={getData}
			/>
		</div>
	);
};

export default Input;
