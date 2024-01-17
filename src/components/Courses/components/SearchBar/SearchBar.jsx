import Button from './../../../../common/Button/Button';

import styles from './SearchBar.module.css';

const SearchBar = ({ getData, buttonHandler }) => {
	return (
		<div className={styles.wrapper}>
			<input
				className={styles.searchbar}
				type='text'
				placeholder='Input text'
				onChange={getData}
			></input>
			<Button buttonText='Search' category='text' onClick={buttonHandler} />
		</div>
	);
};

export default SearchBar;
