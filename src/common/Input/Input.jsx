import propTypes from 'prop-types';

import { useState } from 'react';

import styles from './Input.module.css';

const Input = ({
	onChange,
	isRequired,
	type,
	name,
	isValid = true,
	placeholderText,
	value,
	testID,
}) => {
	const [test, setValue] = useState('');

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
				placeholder={placeholderText}
				onChange={handleInputChange}
				{...(isRequired ? { required: true } : {})}
				value={value ? value : test}
				data-testid={testID}
			/>
			{!isValid && (
				<p className={styles.errorMessage}>
					{`${name.charAt(0).toUpperCase()}${name.slice(1)}`} is required.
				</p>
			)}
		</div>
	);
};

Input.propTypes = {
	onChange: propTypes.func.isRequired,
	isRequired: propTypes.bool,
	type: propTypes.string.isRequired,
	name: propTypes.string.isRequired,
	isValid: propTypes.bool,
};

export default Input;
