import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import Header from '../Header';

const mockedPreloadedState = {
	user: {
		id: 12345,
		isAuth: true,
		name: 'John',
		email: 'john@email.com',
	},
};

describe('Header component', () => {
	it('Logo should be displayed', () => {
		renderWithProviders(<Header />);
		const logo = screen.getByRole('img');
		expect(logo).toHaveAttribute('src', 'logo.svg');
		expect(logo).toHaveAttribute('alt', 'logo');
	});
	it("Header displays logout button and doesn't display username when the user is not logged in ", () => {
		renderWithProviders(<Header />);
		expect(screen.queryByText('Logout')).toBeNull();
		expect(screen.getByText('Login')).toBeInTheDocument();
		expect(screen.queryByText('Test User')).toBeNull();
	});
	it('Header displays logout button and username when the user is logged in', () => {
		renderWithProviders(<Header />, { preloadedState: mockedPreloadedState });
		expect(screen.getByText('Logout')).toBeInTheDocument();
		expect(screen.queryByText('Login')).toBeNull();
		expect(screen.getByText('John')).toBeInTheDocument();
	});
});
