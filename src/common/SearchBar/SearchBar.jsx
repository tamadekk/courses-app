import propTypes from 'prop-types';

import Button from '../Button/Button';

import Input from '../Input/Input';

import styles from './SearchBar.module.css';

const SearchBar = ({ onSearchChange, buttonHandler }) => {
	return (
		<div className={styles.wrapper}>
			<Input
				onChange={onSearchChange}
				type='search'
				name='search'
				placeholderText='Input text'
			/>
			<Button buttonText='Search' onClick={buttonHandler} type='text' />
		</div>
	);
};

SearchBar.propTypes = {
	onSearchChange: propTypes.func.isRequired,
	buttonHandler: propTypes.func.isRequired,
};

export default SearchBar;
