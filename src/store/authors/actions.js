import { ADD_AUTHORS, ADD_AUTHOR, DELETE_AUTHOR } from './types';

export const addAuthorsAction = (payload) => ({ type: ADD_AUTHORS, payload });
export const addAuthorAction = (payload) => ({ type: ADD_AUTHOR, payload });
export const deleteAuthorAction = (payload) => ({
	type: DELETE_AUTHOR,
	payload,
});
