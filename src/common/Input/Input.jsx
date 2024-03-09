import styles from './Input.module.css';
import { useState } from 'react';

const Input = ({ onChange, isRequired, type, name, isValid = true }) => {
	const [, setValue] = useState('');

	const handleInputChange = (event) => {
		const inputValue = event.target.value;
		setValue(inputValue);
		onChange(event);
	};

	return (
		<div>
			<input
				className={isValid ? styles.validinput : styles.invalidinput}
				type={type}
				name={name}
				placeholder='Input text'
				onChange={handleInputChange}
				{...(isRequired ? { required: true } : {})}
			/>
			{!isValid && (
				<p className={styles.errorMessage}>
					{`${name.charAt(0).toUpperCase()}${name.slice(1)}`} is required.
				</p>
			)}
		</div>
	);
};

export default Input;
