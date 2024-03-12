import React from 'react';

import PropType from 'prop-types';

import styles from './AuthorItem.module.css';

import plusIcon from '../../../../assets/icons/plusIcon.svg';
import binIcon from '../../../../assets/icons/binIcon.svg';

import Button from '../../../../common/Button/Button';

const AuthorItem = ({ authors, handleAddAuthor, onDeleteButtonClick }) => {
	return (
		<div>
			{authors.length > 0 ? (
				authors.map((item) => (
					<div className={styles.container} key={item.id}>
						<p>{item.name} </p>
						<Button
							icon={plusIcon}
							type='button'
							onClick={() => handleAddAuthor(item.id)}
						/>
						<Button
							icon={binIcon}
							type='button'
							onClick={() => onDeleteButtonClick(item.id)}
						/>
					</div>
				))
			) : (
				<div className={styles.emptyList}>
					<p>Author list is empty</p>
				</div>
			)}
		</div>
	);
};

AuthorItem.proptype = {
	authors: PropType.arrayOf(PropType.number, PropType.string),
	handleAddAuthor: PropType.func,
	onDeleteButtonClick: PropType.func,
};

export default AuthorItem;
