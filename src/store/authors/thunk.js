import { addAuthor, deleteAuthor } from '../../services';
import { addAuthorAction, deleteAuthorAction } from './actions';

export const performAddAuthor = (newAuthor, userToken) => {
	return async function (dispatch) {
		try {
			const response = await addAuthor(newAuthor, userToken);
			if (response) dispatch(addAuthorAction(response));
		} catch (error) {
			console.log('Error during adding a new author -> thunk.js ');
		}
	};
};

export const performDeleteAuthor = (authorID, userToken) => {
	return async function (dispatch) {
		try {
			const response = await deleteAuthor(authorID, userToken);
			if (response.ok) dispatch(deleteAuthorAction(authorID));
		} catch (error) {
			console.log('Error during deleting the author -> thunk.js ');
		}
	};
};
