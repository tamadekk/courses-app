import styles from './Input.module.css';

const Input = ({ getData, isRequired = false, type, name }) => {
	return (
		<div>
			<input
				className={styles.searchbar}
				type={type}
				name={name}
				placeholder='Input text'
				onChange={getData}
				{...(isRequired ? { required: true } : {})}
			/>
		</div>
	);
};

export default Input;
