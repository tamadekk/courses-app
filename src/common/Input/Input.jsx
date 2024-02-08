import styles from './Input.module.css';

const Input = ({ getData, isRequired, type }) => {
	return (
		<div>
			<input
				className={styles.searchbar}
				type={type}
				placeholder='Input text'
				onChange={getData}
				{...(isRequired ? { required: true } : {})}
			/>
		</div>
	);
};

export default Input;
