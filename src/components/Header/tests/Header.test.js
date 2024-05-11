import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
	},
	courses: [],
	authors: [],
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('Header component', () => {
	it("Header displays logout button and doesn't display username when the user is not logged in ", () => {
		render(
			<BrowserRouter>
				<Provider store={mockedStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);
		expect(screen.queryByText('Logout')).toBeNull();
		expect(screen.getByText('Login')).toBeInTheDocument();
		expect(screen.queryByText('Test User')).toBeNull();
	});
	it('Header displays login button and username when the user is logged in', () => {
		render(
			<BrowserRouter>
				<Provider store={mockedStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);
		if (mockedState.user.isAuth === true) {
			expect(screen.queryByText('Logout')).toBeInTheDocument();
			expect(screen.getByText('Login')).toBeNull();
			expect(screen.queryByText('Test User')).toBeInTheDocument();
		}
	});
});
