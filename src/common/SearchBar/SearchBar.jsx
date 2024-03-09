import Button from '../Button/Button';

import Input from '../Input/Input';

import styles from './SearchBar.module.css';

const SearchBar = ({ onSearchChange, buttonHandler }) => {
	return (
		<div className={styles.wrapper}>
			<Input onChange={onSearchChange} />
			<Button buttonText='Search' onClick={buttonHandler} />
		</div>
	);
};

export default SearchBar;
