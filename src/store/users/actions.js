import { ADD_USER, USER_LOGOUT } from './types';

export const addUserAction = (payload) => ({ type: ADD_USER, payload });
export const userLogOutAcion = (payload) => ({ type: USER_LOGOUT, payload });
