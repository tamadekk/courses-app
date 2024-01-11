import Button from './../../../../common/Button/Button';

import styles from './SearchBar.module.css';

const SearchBar = () => {
	return (
		<div className={styles.wrapper}>
			<input
				className={styles.searchbar}
				type='text'
				placeholder='Input text'
			></input>
			<Button buttonText='Search' />
		</div>
	);
};

export default SearchBar;
