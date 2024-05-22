import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

import { coursesInitialState } from './courses/reducer';
import { authorsInitialState } from './authors/reducer';
import { userInitialState } from './users/reducer';

const preloadedState = {
	courses: coursesInitialState,
	authors: authorsInitialState,
	user: userInitialState,
};
export const setupStore = (preloadedState) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
};
