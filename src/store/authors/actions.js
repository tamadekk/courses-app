import { FETCH_AUTHORS_SUCCESS } from './types';

export const fetchAuthorsSuccess = (authors) => ({
	type: FETCH_AUTHORS_SUCCESS,
	payload: authors,
});
