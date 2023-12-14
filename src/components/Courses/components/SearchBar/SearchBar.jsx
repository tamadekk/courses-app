import styles from './SearchBar.module.css';

const SearchBar = () => {
	return (
		<div>
			<input
				className={styles.searchbar}
				type='text'
				placeholder='Input text'
			></input>
		</div>
	);
};

export default SearchBar;
