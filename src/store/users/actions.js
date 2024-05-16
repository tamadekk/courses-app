import { ADD_USER, USER_LOGOUT, GET_CURRENT_USER } from './types';

export const addUserAction = (payload) => ({ type: ADD_USER, payload });
export const userLogOutAction = () => ({ type: USER_LOGOUT });
export const getUserRoleAction = (payload) => ({
	type: GET_CURRENT_USER,
	payload,
});
