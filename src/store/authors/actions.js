import { FETCH_AUTHORS } from './types';

export const fetchAuthorsSuccess = (authors) => ({
	type: FETCH_AUTHORS,
	payload: authors,
});
