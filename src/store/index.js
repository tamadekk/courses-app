import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

const appInitialState = {
	courses: { courses: [] },
	authors: { authors: [] },
	user: { user: [] },
};
const store = configureStore({
	reducer: rootReducer,
	preloadedState: appInitialState,
});

export default store;