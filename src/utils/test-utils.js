import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../store/index';
import { BrowserRouter } from 'react-router-dom';

export function renderWithProviders(ui, extendedRenderOptions = {}) {
	const {
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	} = extendedRenderOptions;

	const Wrapper = ({ children }) => (
		<Provider store={store}>
			<BrowserRouter>{children}</BrowserRouter>
		</Provider>
	);

	return {
		store,
		...render(ui, { wrapper: Wrapper, ...renderOptions }),
	};
}
