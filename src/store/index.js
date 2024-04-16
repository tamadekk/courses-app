import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

import { coursesInitialState } from './courses/reducer';
import { authorsInitialState } from './authors/reducer';
import { userInitialState } from './users/reducer';

const appInitialState = {
	courses: coursesInitialState,
	authors: authorsInitialState,
	user: userInitialState,
};
const store = configureStore({
	reducer: rootReducer,
	preloadedState: appInitialState,
});

export default store;
