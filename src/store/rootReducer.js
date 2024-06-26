import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { coursesReducer } from './courses/reducer.js';
import { userReducer } from './users/reducer.js';
import { authorsReducer } from './authors/reducer.js';

const rootReducer = combineReducers({
	courses: coursesReducer,
	user: userReducer,
	authors: authorsReducer,
});

export const store = configureStore({ reducer: rootReducer });
export default rootReducer;
